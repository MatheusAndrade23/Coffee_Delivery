export const getPaymentPreference = (paymentPreference: string) => {
  switch (paymentPreference) {
    case 'money':
      return 'Dinheiro';

    case 'creditCard':
      return 'Cartão de Crédito';

    case 'debitCard':
      return 'Cartão de Débito';
  }
};
