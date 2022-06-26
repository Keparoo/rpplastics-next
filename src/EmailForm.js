import { useForm } from 'react-hook-form';

import { Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';

const EmailForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted form data: ', data);
    reset();
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        '& > :not(style)': { minWidth: '38ch' }
      }}
    >
      <Stack spacing={2}>
        <TextField
          {...register('firstName', {
            required: 'First name is required',
            maxLength: {
              value: 30,
              message: '30 character maximum length'
            }
          })}
          label="First Name"
          id="firstName"
          name="firstName"
          error={!!errors['firstName']}
          helperText={errors['firstName'] ? errors['firstName'].message : ''}
          required
        />
        <TextField
          {...register('lastName', {
            required: 'Last name is required',
            maxLength: {
              value: 30,
              message: '30 character maximum length'
            }
          })}
          label="Last Name"
          id="lastName"
          name="lastName"
          error={!!errors['lastName']}
          helperText={errors['lastName'] ? errors['lastName'].message : ''}
          required
        />

        <TextField
          {...register('company', {
            required: 'Company is required',
            maxLength: {
              value: 30,
              message: '30 character maximum length'
            }
          })}
          label="Company"
          id="company"
          name="company"
          error={!!errors['company']}
          helperText={errors['company'] ? errors['company'].message : ''}
          required
        />
        <TextField
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              message: 'Please enter a valid email address'
            }
          })}
          label="Email"
          id="email"
          name="email"
          type="email"
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          required
        />
        <TextField
          {...register('phone', {
            pattern: {
              value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
              message: 'Please enter a valid phone number'
            },
            maxLength: {
              value: 15,
              message: '15 character maximum length'
            }
          })}
          label="Phone"
          id="phone"
          name="phone"
          type="text"
          error={!!errors['phone']}
          helperText={errors['phone'] ? errors['phone'].message : ''}
        />
        <TextField
          {...register('message', {
            required: 'Message is required',
            maxLength: {
              value: 300,
              message: '300 character maximum length'
            }
          })}
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
        endIcon={<SendIcon />}
        fullWidth
        sx={{ marginTop: '16px' }}
      >
        Send
      </Button>
    </Box>
  );
};

export default EmailForm;

// <Box
// component="form"
// noValidate
// autoComplete="off"
// action="mailto:https://rpplastics@msn.com"
// method="post"
// enctype="text/plain"
// sx={{
//   '& > :not(style)': { minWidth: '38ch' }
// }}
// >

// <form
// action="mailto:contact@yourdomain.com"
// method="POST"
// enctype="multipart/form-data"
// name="EmailForm"
// />
