import { Helmet } from 'react-helmet-async';

import { CustomerView } from 'src/sections/customers/view';

import { useAuth } from '../routes/hooks/use-auth';

// ----------------------------------------------------------------------

export default function CustomerPage() {

  useAuth()

  return (
    <>
      <Helmet>
        <title> Shipping Address | BEX Dropship </title>
      </Helmet>

      <CustomerView showTitle/>
    </>
  );
}
