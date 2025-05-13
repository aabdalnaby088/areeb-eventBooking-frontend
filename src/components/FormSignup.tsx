import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { signupUser } from '../redux/userSlice'; // Adjust path as needed
import { Link, useNavigate } from 'react-router-dom';


// Define form values type
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormSignup = () => {
    const dispatch = useAppDispatch();
 const { loading } = useAppSelector((state) => state.user);
 const navigate = useNavigate();
  // Form validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required')
  });

  // Formik hook
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try{
        setSubmitting(true);
        await dispatch(signupUser({
          fname: values.firstName,
          lname: values.lastName,
          email: values.email,
          password: values.password,
          rePassword: values.confirmPassword
        })).unwrap();
        navigate(-1 || '/')
      } catch (error) {
        setStatus(error);
      }
    }
  });

  return (
    <StyledWrapper>
      <form className="form" onSubmit={formik.handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        
        <div className="flex justify-between">
          <label>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </label>
          
          <label>
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error">{formik.errors.lastName}</div>
            ) : null}
          </label>
        </div>  
        
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
        
        <label className=''>
          <input
            className="input relative"
            type="password"
            placeholder="Confirm Password"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
          
        </label>
        
        <button type="submit" disabled={loading} className="submit">{loading ? 'Loading...' : 'Submit'}</button>
        {formik.status && <div className="error">{formik.status}</div>}
        <p className="signin">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
  .form {
    display: flex;
    flex-direction: column;

    gap: 10px;
    width: 30%;
    max-width: 700px;
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

  .title::before,.title::after {
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

  .error{
    color: red;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  .message, .signin {
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
  }

  .form label .input:focus + span,.form label .input:valid + span {
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
    transform: .3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
    cursor: pointer;
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
  }`;

export default FormSignup;