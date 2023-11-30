
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../../layout/Layout';
import { Home } from '../Home/Home';
import { Cart } from '../Cart/Cart';
import { NotFound } from '../NotFound/NotFound';
import { AnimatePresence } from 'framer-motion';
type TheaderShow = {
  headerShow: boolean
}

export const AnimatedRoutes: React.FC <TheaderShow> = ({ headerShow}) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout headerShow={headerShow} />}>
          <Route index element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>{' '}
    </AnimatePresence>
  );
};
