import { OrderContainer } from './styles';

import { useState, useContext } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CartInfo } from './components/CartInfo';
import { PaymentForm } from './components/PaymentForm';

import { OrdersContext } from '../../providers/OrdersProvider';
import { toast } from 'react-toastify';

const newCompleteOrderFormSchema = zod.object({
  CEP: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/, 'Digite um CEP válido'),
  street: zod.string().min(1, 'Digite uma rua!'),
  number: zod
    .number()
    .min(0, 'O número deve ser maior que 0 e menor que 999')
    .max(999, 'O número deve ser maior que 0 e menor que 999'),
  complement: zod
    .string()
    .min(20, 'O complemento deve ser maior que 20 caracteres!')
    .max(60, 'O complemento deve ser menor que 60 caracteres!'),
  district: zod.string().min(1, 'Digite seu bairro!'),
  city: zod.string().min(1),
  estate: zod.string().max(2),
});

export type NewCompleteOrderData = zod.infer<typeof newCompleteOrderFormSchema>;

export const Order = () => {
  const { completeCurrentOrder } = useContext(OrdersContext);
  const [paymentPreference, setPaymentPreference] = useState('');

  const handleSelectPaymentPreference = (newPaymentPreference: string) => {
    setPaymentPreference(newPaymentPreference);
  };

  const newOrderForm = useForm<NewCompleteOrderData>({
    resolver: zodResolver(newCompleteOrderFormSchema),
    defaultValues: {
      CEP: '',
      street: '',
      number: 0,
      complement: '',
      district: '',
      city: '',
      estate: '',
    },
  });

  const {
    reset,
    formState: { errors },
  } = newOrderForm;

  if (errors) {
    toast('s');
  }

  const completeOrder = (data: NewCompleteOrderData) => {
    const newOrderData = { ...data, paymentPreference };

    if (paymentPreference.length === 0) {
      toast.warning('Selecione um meio de pagamento!');
      return;
    }
    completeCurrentOrder(newOrderData);
    reset();
  };

  return (
    <OrderContainer>
      <FormProvider {...newOrderForm}>
        <PaymentForm
          completeOrder={completeOrder}
          handleSelectPaymentPreference={handleSelectPaymentPreference}
          paymentPreference={paymentPreference}
        />
        <CartInfo />
      </FormProvider>
    </OrderContainer>
  );
};
