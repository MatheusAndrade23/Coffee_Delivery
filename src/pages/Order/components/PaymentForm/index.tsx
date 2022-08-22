import {
  PaymentFormContainer,
  AddressForm,
  FormTitle,
  InputContainer,
  PaymentPreference,
  PaymentPreferenceButton,
} from './styles';

import { GrLocation } from 'react-icons/gr';
import { MdAttachMoney } from 'react-icons/md';

import { FaMoneyBill, FaMoneyCheck } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';
import { useState } from 'react';

export const PaymentForm = () => {
  const [paymentPreference, setPaymentPreference] = useState('');

  const handleSelectPaymentPreference = (paymentPreference: string) => {
    setPaymentPreference(paymentPreference);
  };

  return (
    <PaymentFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressForm>
        <FormTitle>
          <GrLocation />
          <div>
            <h4>Endereço de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormTitle>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <InputContainer>
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </InputContainer>
        <InputContainer>
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </InputContainer>
      </AddressForm>
      <PaymentPreference>
        <FormTitle>
          <MdAttachMoney />
          <div>
            <h4>Pagamento</h4>
            <span>
              O pagamento é feito na entrega. Escolha como deseja pagar
            </span>
          </div>
        </FormTitle>
        <div>
          <PaymentPreferenceButton
            selected={paymentPreference === 'creditCard'}
            onClick={() => handleSelectPaymentPreference('creditCard')}
          >
            <FaMoneyCheck />
            Cartão de Crédito
          </PaymentPreferenceButton>
          <PaymentPreferenceButton
            selected={paymentPreference === 'debitCard'}
            onClick={() => handleSelectPaymentPreference('debitCard')}
          >
            <AiFillBank />
            Cartão de Débito
          </PaymentPreferenceButton>
          <PaymentPreferenceButton
            selected={paymentPreference === 'money'}
            onClick={() => handleSelectPaymentPreference('money')}
          >
            <FaMoneyBill />
            Dinheiro
          </PaymentPreferenceButton>
        </div>
      </PaymentPreference>
    </PaymentFormContainer>
  );
};
