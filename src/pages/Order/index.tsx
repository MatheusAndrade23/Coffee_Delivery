import { OrderContainer } from './styles';

import { useState, useContext } from 'react';
import { format } from 'date-fns';

import { ptBR } from 'date-fns/locale';

import { v4 as uuid } from 'uuid';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CartInfo } from './components/CartInfo';
import { PaymentForm } from './components/PaymentForm';

import { OrdersContext } from '../../providers/OrdersProvider';
import { toast } from 'react-toastify';

const newCompleteOrderFormSchema = zod.object({
  CEP: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
  road: zod.string().min(10),
  number: zod.string().min(1).max(3),
  complement: zod.string().min(20),
  district: zod.string().min(10),
  city: zod.string(),
  estate: zod.string(),
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
      road: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      estate: '',
    },
  });

  const { reset } = newOrderForm;

  // if (Object.keys(errors).length > 0) {
  //   const key = Object.keys(errors)[0];
  //   toast.warning(errors[key].message);
  // }

  const completeOrder = (data: NewCompleteOrderData) => {
    const newOrderData = {
      ...data,
      paymentPreference,
      date: format(new Date(), 'dd/MM/yyyy', { locale: ptBR }),
      id: uuid(),
    };

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
