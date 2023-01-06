import { Route, Routes } from 'react-router-dom';
import * as ROUTES from '../constant/router';
import { Home, Details } from '../pages';
import { Navbar } from '../components';

const PageRoutes = () => (
  <Routes>
    <Route element={<Navbar />}>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.DETAILS} element={<Details />} />
    </Route>
  </Routes>
);

export default PageRoutes;
