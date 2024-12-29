import { Helmet } from 'react-helmet-async';

import { NewCustomerView } from 'src/sections/new-customer/view';

import { useAuth } from '../routes/hooks/use-auth';

// ----------------------------------------------------------------------

export default function OrderDetailPage() {

  useAuth()

  return (
    <>
      <Helmet>
        <title> New Shipping Address | BEX Dropship </title>
      </Helmet>

      <NewCustomerView />
    </>
  );
}