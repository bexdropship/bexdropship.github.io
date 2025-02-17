import { Helmet } from 'react-helmet-async';

import { ProductView } from 'src/sections/products/view';

import { useAuth } from '../routes/hooks/use-auth';

// ----------------------------------------------------------------------

export default function ProductsPage() {

  useAuth()

  return (
    <>
      <Helmet>
        <title> Products | BEX Dropship </title>
      </Helmet>

      <ProductView showTitle/>
    </>
  );
}
