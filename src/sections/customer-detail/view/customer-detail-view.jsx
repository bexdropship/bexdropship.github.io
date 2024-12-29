import config from 'src/config/config'; // Adjust the import path as necessary

import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for managing cookies

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Stack,
  FormControl
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import CustomerArchivePopupModal from '../archive-customer-popup';

// ----------------------------------------------------------------------

export default function CustomerDetailView({
  partnerId,
}) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [customerName, setCustomerName] = useState('');
  
  const [formData, setFormData] = useState({
    name: "",
    ext_dropship_partner_id: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    phone: "",
    mobile: "",
    company_name: ""
  });

  useEffect(() => {
    // Fetch order details from the API
    fetchCustomer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArchiveCustomer = () => {
    handleSaveCustomer(true);
  }

  const handleSaveCustomer = (archive) => {
    setLoading(true); // Set loading to true when authentication process starts
    console.log('Saving Customer')
    const action = 'post';
    const requestUrl = `${config.baseURL}/api-proxy/proxy?method=${action}&resource=customers`
    console.log(requestUrl);
    const requestBody = {
      partner: {
        id: parseInt(partnerId, 10),
        name: formData.name,
        street: formData.street,
        street2: formData.street2,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        country: formData.country,
        email: formData.email,
        phone: formData.phone,
        mobile: formData.mobile
      }
    };
    if ( archive === true ) {
      requestBody.partner.active = false;
    }
    console.log('Request body', requestBody);

    axios.post(requestUrl, requestBody, {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`, // Replace with your actual JWT token
      }
    })
    .then(response => {
      console.log(response.data);
      setLoading(false);
      if ( response.data.result.success === false ) {
        alert(response.data.result.message);
      } else {
        window.location.reload();
      }
    })
    .catch(error => {
      console.error('Error saving customer:', error);
    });
  };

  const fetchCustomer = () => {
    console.log('Fetching Customer Details')
    const requestUrl = `${config.baseURL}/api-proxy/proxy?method=get&resource=customers&partner_id=${partnerId}`
    console.log(requestUrl);
    axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`, // Replace with your actual JWT token
      }
    })
    .then(response => {
      console.log(response.data.data);
      if ( response.data.data.length === 0 ) {
        router.push('/customers');
      }
      setCustomerName(response.data.data.name);
      const { data } = response.data;;
      // Map the API response to form fields
      setFormData(prevFormData => ({
            ...prevFormData, // Spread existing data to avoid losing any field
            name: data.name || "",
            street: data.street || "",
            street2: data.street2 || "",
            city: data.city || "",
            state: data.state_id.code || "",
            zip: data.zip || "",
            country: data.country_id.code || "",
            email: data.email || "",
            phone: data.phone || "",
            mobile: data.mobile || "",
            company_name: data.company_name || ""
        }));
    })
    .catch(error => {
      console.error('Error fetching order details:', error);
    });
  };

  const renderForm = (
    <FormControl sx={{ width: "100%" }}>
        <Stack spacing={3}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Street2"
                name="street2"
                value={formData.street2}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                fullWidth
                required
            />
            <div style={{ margin: '16px 0' }} />
            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                onClick={handleSaveCustomer}
                loading={loading}
            >
                Save
            </LoadingButton>   
        </Stack>
    </FormControl>     
  );

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Shipping Address: {customerName}</Typography>
        <Stack direction="row" spacing={2}>
          <CustomerArchivePopupModal 
            handleArchiveCustomer={handleArchiveCustomer}
          />
        </Stack>
      </Stack>
      {renderForm}
      <Card/>
    </Container>
  );
}

CustomerDetailView.propTypes = {
  partnerId: PropTypes.any,
};
