export interface User {
  id: string;
  role: string;
  token: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignupFormValues extends LoginFormValues {
  fname: string;
  lname: string;
  rePassword:string;
}
