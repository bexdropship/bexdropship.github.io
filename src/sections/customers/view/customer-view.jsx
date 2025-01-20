import config from 'src/config/config'; // Adjust the import path as necessary

import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for managing cookies
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { useRouter } from 'src/routes/hooks';

import Scrollbar from 'src/components/scrollbar';

import { emptyRows } from '../utils'
import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';

// ----------------------------------------------------------------------

export default function CustomerView({
  showTitle,
  onSelect,
  filterTypeOption
}) {
  const router = useRouter();

  const [customers, setCustomers] = useState([]);

  const [page, setPage] = useState(0);

  const [maxRecord, setMaxRecord] = useState(0);

  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [filterType, setFiltertype] = useState(filterTypeOption);

  const [rowsPerPage, setRowsPerPage] = useState(25);

  const [totalCount, setTotalCount] = useState(0);

  const customersRef = useRef(customers);
  const rowsPerPageRef = useRef(rowsPerPage);
  const pageRef = useRef(page);
  const filterNameRef = useRef(filterName);
  const filterTypeRef = useRef(filterType);

  useEffect(() => {
    // Fetch customers from the API
    customersRef.current = customers;
    rowsPerPageRef.current = rowsPerPage;
    pageRef.current = page;
    filterNameRef.current = filterName;
    filterTypeRef.current = filterType;
    fetchCustomers(pageRef.current, rowsPerPageRef.current, customersRef.current, filterNameRef.current, filterTypeRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCustomers = (pg, lm, cst, nm, ft, or, orb) => {
    console.log('Fetching Customers')
    const normalizedPageNumber = pg + 1;
    let requestUrl = `${config.baseURL}/api-proxy/proxy?method=get&resource=customers&page=${normalizedPageNumber}&page_size=${lm}`
    if (nm) {
      requestUrl += `&name=${nm}`;
    }
    if (ft) {
      requestUrl += `&type=${ft}`;
    }
    if (or) {
      requestUrl += `&order=${or}`;
    }
    if (orb) {
      requestUrl += `&orderby=${orb}`;
    }
    console.log(requestUrl);
    axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`, // Replace with your actual JWT token
      }
    })
    .then(response => {
      console.log(response.data.data);
      setCustomers([...cst,...response.data.data]);
      setTotalCount(response.data.count);
    })
    .catch(error => {
      console.error('Error fetching customers:', error);
    });
  };

  const handleSort = (event, id) => {
    console.log('Handling Sort')
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      const newOrder = isAsc ? 'desc' : 'asc';
      const newOrderBy = id;
      setOrder(newOrder);
      setOrderBy(newOrderBy);
      getSorted(newOrder, newOrderBy);
    }
  };

  const getSorted = (_order, _orderBy) => {
    console.log(`Sorting ${_orderBy} ${_order}`)
    setPage(0);
    setMaxRecord(0);
    fetchCustomers(0, rowsPerPage, [], filterName, filterType, _order, _orderBy)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    const numberOfRecords = rowsPerPage * newPage;
    if (numberOfRecords > maxRecord) {
      setMaxRecord(numberOfRecords);
      fetchCustomers(newPage, rowsPerPage, customers, filterName, filterType);
    }

  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleClickSearch();
    }
  };

  const handleClickSearch = (event) => {
    setPage(0);
    fetchCustomers(page, rowsPerPage, [], filterName, filterType);
  };

  const notFound = !customers.length && !!filterName;

  return (
    <Container>
      {showTitle && ( // Display error message if authError state is not null
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">
            Shipping Addresses
            <Chip
              label='Create'  // Directly use orderState for the label
              color='primary'  // Customize the color based on the state
              variant="outlined"  // Optional: Change to solid if you prefer
              style={{ marginLeft: '10px' }}
              onClick={() => router.push('/new-customer')}
            />
          </Typography>
        </Stack>
      )}

      <Card>
        <UserTableToolbar
          filterName={filterName}
          onFilterName={handleFilterByName}
          onClickSearch={handleClickSearch}
          onHitEnter={handleEnter}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={customers.length}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'street', label: 'Street' },
                  { id: 'city', label: 'City' },
                  { id: 'state', label: 'State' },
                  { id: 'country', label: 'Country' },
                  { id: 'zip', label: 'Zip' },
                  { id: 'phone', label: 'Phone' },
                  { id: 'mobile', label: 'Mobile' },
                  { id: 'email', label: 'Email' },
                ]}
              />
              <TableBody>
                {customers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      id={row.id}
                      name={row.name}
                      street={row.street}
                      city={row.city}
                      state={row.state_id.name}
                      country={row.country_id.name}
                      zip={row.zip}
                      phone={row.phone}
                      mobile={row.mobile}
                      email={row.email}
                      onSelect={onSelect || (() => router.push(`/customers/${row.id}`))}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, customers.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}

CustomerView.propTypes = {
  showTitle: PropTypes.bool,
  onSelect: PropTypes.func,
  filterTypeOption: PropTypes.string
};
