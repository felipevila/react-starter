import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import generator from 'creditcard-generator';

const providers = ['VISA', 'Mastercard', 'Amex', 'Discover'];

export function Inputs() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    date: new Date(),
    card: generator.GenCC(),
  });

  const handleDateChange = (date) => {
    setFormState({ ...formState, date });
  };

  const handleGenerateCC = (provider) => {
    setFormState({ ...formState, card: generator.GenCC(provider) });
  };

  const handleFormData = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container spacing={4} style={{ marginBottom: 40 }}>
        <Grid item md={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={handleFormData}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={handleFormData}
          />
        </Grid>
        <Grid item md={6}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Start Date"
            format="MM/dd/yyyy"
            value={formState.date}
            onChange={handleDateChange}
            fullWidth
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        <Grid item md={6}>
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <TextField
              required
              value={formState.card}
              id="cc"
              name="cc"
              label="Credit Card Number"
              fullWidth
              autoComplete="cc-number"
            />
          </div>
          {providers.map((provider) => (
            <Button
              onClick={() => handleGenerateCC(provider)}
              variant="contained"
              key={provider}
            >
              {provider}
            </Button>
          ))}
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
