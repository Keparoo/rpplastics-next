import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const EmailForm = () => {
  const [ form, setForm ] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const resetForm = () => {
    setForm({
      firstName: '',
      lastName: '',
      phone: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  const handleSubmit = () => {
    console.log(form.name, form.email, form.message);
    resetForm();
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      action="mailto:rpplastics@msn.com"
      method="post"
      enctype="text/plain"
      sx={{
        '& > :not(style)': { m: 1, minWidth: '38ch' }
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="First Name"
          id="firstName"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Last Name"
          id="lastName"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <TextField
          label="Company"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone"
          id="phone"
          name="phone"
          type="email"
          value={form.phone}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          multiline
          rows={8}
        />
      </Stack>
      <Button onClick={handleSubmit} variant="contained" sx={{ width: '97%' }}>
        Send
      </Button>
    </Box>
  );
};

export default EmailForm;

// <form
// action="mailto:contact@yourdomain.com"
// method="POST"
// enctype="multipart/form-data"
// name="EmailForm"
// />
