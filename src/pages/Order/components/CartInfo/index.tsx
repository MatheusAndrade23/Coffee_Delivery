import {
  CartList,
  PriceInfo,
  PriceTag,
  CompleteOrderButton,
  CartInfoContainer,
  CartEmptyMessage,
  CoffeesList,
} from './styles';

import { useContext } from 'react';

import { OrdersContext } from '../../../../providers/OrdersProvider';

import { HalfCoffeeCard } from '../../../../components/HalfCoffeeCard';

export const CartInfo = () => {
  const { cart, productsPrice, deliveryPrice, totalPrice } =
    useContext(OrdersContext);

  const isCartEmpty = cart.length === 0;
  const isButtonDisabled = isCartEmpty;

  return (
    <CartInfoContainer>
      <h2>Cafés Selecionados</h2>
      <CartList>
        {isCartEmpty ? (
          <CartEmptyMessage>
            <h2>Carrinho vazio!</h2>
            <a href="/">Clique aqui para ver nosso catálogo de cafés!</a>
          </CartEmptyMessage>
        ) : (
          <CoffeesList>
            {cart.map((coffee) => (
              <HalfCoffeeCard coffee={coffee} key={coffee.id} />
            ))}
          </CoffeesList>
        )}

        <PriceInfo>
          <PriceTag>
            <p>Total de Itens</p>
            <span>
              R$<span>{`${productsPrice},00`}</span>
            </span>
          </PriceTag>
          <PriceTag>
            <p>Entrega</p>
            <span>
              R$<span>{`${deliveryPrice},00`}</span>
            </span>
          </PriceTag>
          <PriceTag>
            <h5>Total</h5>
            <h5>
              R$<span>{`${totalPrice},00`}</span>
            </h5>
          </PriceTag>
        </PriceInfo>
        <CompleteOrderButton
          disabled={isButtonDisabled}
          title={
            isButtonDisabled
              ? 'Adicione um café ao carrinho antes de completar o pedido'
              : 'Completar o pedido'
          }
          type="submit"
          form="completeOrderForm"
        >
          Confirmar Pedido
        </CompleteOrderButton>
      </CartList>
    </CartInfoContainer>
  );
};
