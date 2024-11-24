import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

interface PrivateProps {
  children: React.ReactNode,
}

const PrivateRoute = ({ children }: PrivateProps) => {
  const navigate = useNavigate();
  const {token} = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return
    }
 
  }, [token])

  if(!token) return <div></div>;

  return <>{children}</>;
};

export default PrivateRoute;
