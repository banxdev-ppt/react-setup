import { IPrivateRoute } from '@/types/global';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }: IPrivateRoute) {
  const isAuthenticated = localStorage.getItem('token');
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}
