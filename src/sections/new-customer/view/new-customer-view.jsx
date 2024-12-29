import config from 'src/config/config'; // Adjust the import path as necessary

import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for managing cookies

// import PropTypes from 'prop-types';
import { useState } from 'react';

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

// ----------------------------------------------------------------------

export default function NewCustomerView() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateCustomer = () => {
    setLoading(true);
    console.log('Creating a customer')
    const requestUrl = `${config.baseURL}/api-proxy/proxy?method=post&resource=customers`
    console.log(requestUrl);
    const requestBody = {
      partner: {
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
    console.log('Request body', requestBody);
    axios.post(requestUrl, requestBody, {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`, // Replace with your actual JWT token
      }
    })
    .then(response => {
      console.log(response.data);
      setLoading(false);
      router.push(`/customers/${response.data.result.partner_id}`);
    })
    .catch(error => {
      console.error('Error fetching customers:', error);
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
                onClick={handleCreateCustomer}
                loading={loading}
            >
                Create
            </LoadingButton>   
        </Stack>
    </FormControl>
  );

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">New Shipping Address</Typography>
      </Stack>
      {renderForm}
      <Card/>
    </Container>
  );
}
