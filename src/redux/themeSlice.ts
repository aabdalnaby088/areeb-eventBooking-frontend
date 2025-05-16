// src/redux/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  darkMode: boolean;
};

const darkMode = localStorage.getItem('darkMode');

if(darkMode){
  const json = JSON.parse(darkMode);
  if(json){
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }
}

const initialState: ThemeState = {
  darkMode: darkMode ? JSON.parse(darkMode) : false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      console.log(state.darkMode);
      
      if (state.darkMode) {
        console.log(state.darkMode);
        
        localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
      }
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
