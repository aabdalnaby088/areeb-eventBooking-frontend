import { Navigate } from 'react-router-dom';
import { type FC, type ReactNode } from 'react';
import { useAppSelector } from '../hooks/redux.hooks';

interface ProtectedRouteProps {
  children: ReactNode;
}

interface JwtPayload {
  role?: string;
}

interface UserState {
  user: {
    role?: string;
  } | null;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state: { user: UserState }) => state.user);
  const token = localStorage.getItem('token');
  let isAdmin = false;

  // Step 1: Try decoding the JWT token
  if (token) {
    try {
      const payloadBase64 = token.split('.')[1];
      const decodedPayload: JwtPayload = JSON.parse(atob(payloadBase64));
      isAdmin = decodedPayload.role === 'admin';
    } catch (error) {
      console.error('Error decoding JWT token:', error);
    }
  }

  // Step 2: Fallback to Redux user state if token is invalid or role not admin
  if (!isAdmin && user) {
    isAdmin = user.role === 'admin';
  }

  // If not an admin, redirect to login
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  // If admin, render the protected component
  return <>{children}</>;
};

export default ProtectedRoute;