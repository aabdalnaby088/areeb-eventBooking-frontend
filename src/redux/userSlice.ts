import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';
import type { User, LoginFormValues, SignupFormValues } from '../Types/user';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const getInitialUserState = (): User | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode<User>(token);
    return {
      ...decoded,
      token // Include the raw token in the user object
    };
  } catch (error) {
    console.error('Failed to decode token', error);
    localStorage.removeItem('token'); // Clean up invalid token
    return null;
  }
};

const initialState: UserState = {
  user: getInitialUserState(),
  loading: false,
  error: null,
};


export const loginUser = createAsyncThunk(
  'user/signin',
  async (values: LoginFormValues, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/signin', values);
      const { data: token } = res.data;

      const decodedUser = jwtDecode<User>(token);
      const userWithToken = {
        ...decodedUser,
        token,
      };

      localStorage.setItem('token', token);
      
      toast.success('Logged in successfully!');
      return userWithToken;
    } catch (err: any) {
      const message = err.response?.data?.message || 'Login failed';
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);


export const signupUser = createAsyncThunk(
  'user/signup',
  async (values: SignupFormValues, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/signup', values);
      
      const { data: token } = res.data;
      
      const decodedUser = jwtDecode<User>(token);
      console.log(decodedUser);
      
      const userWithToken = {
        ...decodedUser,
        token
      };
      
      localStorage.setItem('token', token);
      
      // Show success toast
      toast.success('Signup successful! Welcome aboard!');
      
      return userWithToken;
    } catch (err: any) {
      // Show error toast
      const errorMessage = err.response?.data?.message || 'Signup failed';
      toast.error(errorMessage);
      
      return rejectWithValue(errorMessage);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('token');
    },
    setUserFromToken: (state) => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode<User>(token);
          state.user = {
            ...decoded,
            token
          };
        } catch (error) {
          console.error('Invalid token', error);
          localStorage.removeItem('token');
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        localStorage.removeItem('token'); // Clean up on failure
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { logoutUser, setUserFromToken } = userSlice.actions;
export default userSlice.reducer;