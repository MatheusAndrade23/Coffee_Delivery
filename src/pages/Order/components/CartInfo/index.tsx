import {
  CartList,
  PriceInfo,
  PriceTag,
  CompleteOrderButton,
  CartInfoContainer,
} from './styles';

import { HalfCoffeeCard } from '../../../../components/HalfCoffeeCard';

export const CartInfo = () => {
  return (
    <CartInfoContainer>
      <h2>Cafés Selecionados</h2>
      <CartList>
        <HalfCoffeeCard />
        <HalfCoffeeCard />
        <PriceInfo>
          <PriceTag>
            <p>Total de Itens</p>
            <span>
              R$<span>29,70</span>
            </span>
          </PriceTag>
          <PriceTag>
            <p>Entrega</p>
            <span>
              R$<span>3,50</span>
            </span>
          </PriceTag>
          <PriceTag>
            <h5>Entrega</h5>
            <h5>
              R$<span>3,50</span>
            </h5>
          </PriceTag>
        </PriceInfo>
        <CompleteOrderButton>Confirmar Pedido</CompleteOrderButton>
      </CartList>
    </CartInfoContainer>
  );
};
