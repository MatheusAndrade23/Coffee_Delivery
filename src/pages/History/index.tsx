import { HistoryContainer } from './styles';

import { useContext } from 'react';

import { OrdersContext } from '../../providers/OrdersProvider';

import { HistoryCard } from './components/HistoryCard';

import { NoCompleteOrderMessage } from '../SuccessfulOrder/styles';

export const History = () => {
  const { orders } = useContext(OrdersContext);

  return (
    <HistoryContainer>
      {orders.length == 0 ? (
        <NoCompleteOrderMessage>
          <h2>Você ainda não completou nenhum pedido!</h2>
        </NoCompleteOrderMessage>
      ) : (
        <>
          <h3>Histórico de Pedidos</h3>
          {orders.map((order) => (
            <HistoryCard
              city={order.city}
              estate={order.estate}
              cart={order.cart}
              paymentPreference={order.paymentPreference}
              date={order.date}
              totalPrice={order.totalPrice}
              key={order.id}
            />
          ))}
        </>
      )}
    </HistoryContainer>
  );
};
