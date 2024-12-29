import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { CustomerDetailView } from 'src/sections/customer-detail/view';

import { useAuth } from '../routes/hooks/use-auth';

// ----------------------------------------------------------------------

export default function CustomerDetailPage() {

  useAuth()

  const { partnerId } = useParams();

  return (
    <>
      <Helmet>
        <title> Shipping Address Detail | BEX Dropship </title>
      </Helmet>

      <CustomerDetailView partnerId={partnerId}/>
    </>
  );
}