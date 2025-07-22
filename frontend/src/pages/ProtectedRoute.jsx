import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  const location = useLocation()

  return token ? <Outlet /> : <Navigate to="/books/login" state={{ from: location }} replace/>;
};

export default ProtectedRoute;
