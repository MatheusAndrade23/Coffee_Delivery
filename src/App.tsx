import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Routes } from './routes';

import { ThemeProvider } from './providers/ThemeProvider';
import { OrdersProvider } from './providers/OrdersProvider';

export default function App() {
  return (
    <OrdersProvider>
      <ThemeProvider>
        <Routes />
        <ToastContainer
          autoClose={3000}
          pauseOnHover={false}
          style={{ width: 'max-content' }}
        />
      </ThemeProvider>
    </OrdersProvider>
  );
}
