import * as React from 'react';
import { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

export default function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userDetails = { name, phoneNumber, email };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    window.location.href = '/second-page';
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4">Enter your details</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2 } }}>
        <TextField
          required
          fullWidth
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
