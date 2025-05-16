import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { loginUser } from '../redux/userSlice'; 
import { Link, useNavigate } from 'react-router-dom';

// Define form values type
interface FormValues {
  email: string;
  password: string;
}

const FormLogin = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
  });

  // Formik hook
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      console.log(values);
      try {
        setSubmitting(true);
        const userData = await dispatch(loginUser({
          email: values.email,
          password: values.password,
        })).unwrap();
        
        const userRole = userData?.role || 'user';

        // redirect to admin page if user is admin
        if (userRole === 'admin') {
          navigate('/Admin');
        } else {
          navigate('/');
        } 
      } catch (error) {
        console.log(error);
        setStatus(error);
      }
    }
  });

  return (
    <StyledWrapper>
      <form className="form" onSubmit={formik.handleSubmit}>
        <p className="title">Login</p>
        <p className="message">Login to your account</p>
        
        <label>
          <input
            className="input"
            type="email"
            placeholder="xyz@gmail.com"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </label> 
        
        <label>
          <input
            className="input"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </label>
        
        <button type="submit" disabled={loading} className="submit">{loading ? 'Loading...' : 'Submit'}</button>
        {formik.status && <div className="error">{formik.status}</div>}
        <p className="signin">New To our platform? <Link to="/signup">Sign up</Link></p>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 30%;
    max-width: 800px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .error {
    color: red;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    color: #333;
    background-color: #fff;
  }

  .form label .input::placeholder {
    color: grey;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
    color: grey !important;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    .form {
      background-color: #1a1a1a;
    }

    .form label .input {
      color: #e0e0e0;
      background-color: #333;
      border-color: rgba(200, 200, 200, 0.3);
    }

    .form label .input::placeholder {
      color: #aaa;
    }

    .form label .input + span {
      color: #aaa;
    }

    .form label .input:placeholder-shown + span {
      color: #aaa !important;
    }

    .form label .input:focus + span,
    .form label .input:valid + span {
      color: #4caf50;
    }

    .message,
    .signin {
      color: rgba(200, 200, 200, 0.8);
    }
  }

  @media only screen and (max-width: 700px) {
    .form {
      width: 80%;
    }
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default FormLogin;