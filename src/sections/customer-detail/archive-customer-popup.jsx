import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {
    Stack,
    Button,
    Dialog,
    DialogTitle,
    DialogContent, 
    DialogActions,
    DialogContentText 
} from '@mui/material';

import Iconify from 'src/components/iconify';

export default function CustomerArchivePopupModal({ handleArchiveCustomer }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row" alignItems="center">
        <Stack direction="column" alignItems="center" spacing={1}>
            <IconButton
                onClick={handleOpen}
                sx={{
                    color: 'red',
                    backgroundColor: '#fdd', // Light blue background
                    '&:hover': { backgroundColor: '#fbb' } // Darker blue on hover
                }}
            >
                <Iconify icon="eva:close-outline" />
            </IconButton>
            <Typography variant="caption" sx={{ color: 'red' }}>Archive</Typography>
        </Stack>
        <Dialog 
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Confirm Archive</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to archive this address?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleArchiveCustomer} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    </Stack>
  );
};

CustomerArchivePopupModal.propTypes = {
    handleArchiveCustomer: PropTypes.func,
};
