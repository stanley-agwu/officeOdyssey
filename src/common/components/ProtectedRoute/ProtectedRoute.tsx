import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'common/api/store/store';
import { coreConfig } from 'common/core/config';

const PrivatedRoute = () => {
  const { userDetails } = useAppSelector((state) => state.auth);
  return userDetails ? <Outlet /> : <Navigate to={coreConfig.routes.login} replace />;
};
export default PrivatedRoute;
