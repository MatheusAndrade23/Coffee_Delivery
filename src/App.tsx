import { Routes } from './routes';

import { ThemeProvider } from './providers/ThemeProvider';
import { OrdersProvider } from './providers/OrdersProvider';

export default function App() {
  return (
    <OrdersProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </OrdersProvider>
  );
}
