import { Route, Routes } from 'react-router-dom';
import * as ROUTES from '../constant/router';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<h1>Home</h1>} />
      <Route path={ROUTES.DETAILS} element={<h1>Details</h1>} />
    </Routes>
  );
};

export default PageRoutes;
