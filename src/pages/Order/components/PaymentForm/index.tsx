import {
  PaymentFormContainer,
  AddressForm,
  FormTitle,
  InputContainer,
  PaymentPreference,
  PaymentPreferenceButton,
  Validation,
  FieldValidation,
} from './styles';

import { useFormContext } from 'react-hook-form';

import { GrLocation } from 'react-icons/gr';
import { MdAttachMoney } from 'react-icons/md';

import { useState, useEffect } from 'react';

import { db } from '../../../../services/api';

import { FaMoneyBill, FaMoneyCheck } from 'react-icons/fa';
import { AiFillBank, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

interface PaymentFormProps {
  completeOrder: any;
  handleSelectPaymentPreference: (newPaymentPreference: string) => void;
  paymentPreference: string;
}

export const PaymentForm = ({
  completeOrder,
  handleSelectPaymentPreference,
  paymentPreference,
}: PaymentFormProps) => {
  const [cepInfo, setCepInfo] = useState({ estate: '', city: '' });
  const { register, handleSubmit, watch, formState } = useFormContext();

  const { estate, city } = cepInfo;

  const cep = watch('CEP');
  const road = watch('road');
  const district = watch('district');
  const complement = watch('complement');
  const number = watch('number');

  const isCepValid = /^[0-9]{5}-[0-9]{3}$/.test(cep);
  const isRoadValid = road.length > 10;
  const isDistrictValid = district.length > 10;
  const isComplementValid = complement.length > 20;
  const isNumberValid = parseInt(number) > 0 && parseInt(number) <= 999;

  const handleCompleteOrder = (data: any) => {
    const orderData = { ...data, ...cepInfo };
    completeOrder(orderData);
  };

  useEffect(() => {
    const getCepInfo = async () => {
      if (isCepValid) {
        const resp = await db.get(`/${cep}/json`);

        const newCepInfo = { estate: resp.data.uf, city: resp.data.localidade };
        setCepInfo(newCepInfo);
      } else {
        setCepInfo({ estate: '', city: '' });
      }
    };

    getCepInfo();
  }, [watch('CEP')]);

  return (
    <PaymentFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressForm
        onSubmit={handleSubmit(handleCompleteOrder)}
        id="completeOrderForm"
      >
        <FormTitle>
          <GrLocation />
          <div>
            <h4>Endereço de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormTitle>
        <input type="text" placeholder="CEP" {...register('CEP')} />
        <input type="text" placeholder="Rua" {...register('road')} />
        <InputContainer>
          <input type="number" placeholder="Número" {...register('number')} />
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </InputContainer>
        <InputContainer>
          <input type="text" placeholder="Bairro" {...register('district')} />
          <input
            type="text"
            placeholder="Cidade"
            {...register('city')}
            disabled={true}
            value={city}
          />
          <input
            type="text"
            placeholder="UF"
            {...register('estate')}
            disabled={true}
            value={estate}
          />
        </InputContainer>
        <Validation>
          <FieldValidation valid={isRoadValid}>
            Rua com + de 10 caracteres {FieldValidationIcon(isRoadValid)}
          </FieldValidation>
          <FieldValidation valid={isNumberValid}>
            Número entre 1 e 999 {FieldValidationIcon(isNumberValid)}
          </FieldValidation>
          <FieldValidation valid={isDistrictValid}>
            Bairro com + de 10 caracteres {FieldValidationIcon(isDistrictValid)}
          </FieldValidation>
          <FieldValidation valid={isCepValid}>
            CEP no formato: 0000-000 {FieldValidationIcon(isCepValid)}
          </FieldValidation>
          <FieldValidation valid={isComplementValid}>
            Complemento com + de 20 caracteres{' '}
            {FieldValidationIcon(isComplementValid)}
          </FieldValidation>
        </Validation>
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

const FieldValidationIcon = (validation: boolean) => {
  if (validation) {
    return <AiOutlineCheck />;
  }
  return <AiOutlineClose />;
};
