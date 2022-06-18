import { useForm } from 'react-hook-form';

import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const EmailForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, errors);
    reset();
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
          {...register('firstName', { required: 'First name is required' })}
          label="First Name"
          id="firstName"
          name="firstName"
          error={!!errors['firstName']}
          helperText={errors['firstName'] ? errors['firstName'].message : ''}
          required
        />
        <TextField
          {...register('lastName', { required: 'Last name is required' })}
          label="Last Name"
          id="lastName"
          name="lastName"
          error={!!errors['lastName']}
          helperText={errors['lastName'] ? errors['lastName'].message : ''}
          required
        />

        <TextField
          {...register('company', { required: 'Company is required' })}
          label="Company"
          id="company"
          name="company"
          error={!!errors['company']}
          helperText={errors['company'] ? errors['company'].message : ''}
          required
        />
        <TextField
          {...register('email', { required: 'Email is required' })}
          label="Email"
          id="email"
          name="email"
          type="email"
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          required
        />
        <TextField
          {...register('phone')}
          label="Phone"
          id="phone"
          name="phone"
          type="email"
        />
        <TextField
          {...register('message', { required: 'Message is required' })}
          label="Message"
          id="message"
          name="message"
          error={!!errors['message']}
          helperText={errors['message'] ? errors['message'].message : ''}
          required
          multiline
          rows={8}
        />
      </Stack>
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        sx={{ width: '97%' }}
      >
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
