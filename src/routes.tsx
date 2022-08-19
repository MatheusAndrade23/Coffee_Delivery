import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { History } from './pages/History';
import { PageNotFound } from './pages/PageNotFound';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/history" element={<History />} />
        <Route path="/order" element={<Order />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Switch>
      <Footer />
    </Router>
  );
};