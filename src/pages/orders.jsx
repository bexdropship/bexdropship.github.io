import { Helmet } from 'react-helmet-async';

import { OrderView } from 'src/sections/orders/view';

import { useAuth } from '../routes/hooks/use-auth';

// ----------------------------------------------------------------------

export default function OrderPage() {

  useAuth()

  return (
    <>
      <Helmet>
        <title> Order | BEX Dropship </title>
      </Helmet>

      <OrderView />
    </>
  );
}
