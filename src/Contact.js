import { Box, Stack, Typography, Tooltip, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import Link from './Link';

const Contact = () => {
  return (
    <Box id="contact" pt={13}>
      <Typography variant="h2" component="h2" color="secondary" mb={2}>
        Contact Us
      </Typography>

      <Typography variant="body1" ml={4}>
        R&P Plastics, LLC<br />
        202 Spruce St<br />
        Winchendon, MA 01475-1159<br />
      </Typography>

      <Stack direction="row" spacing={1} mt={2}>
        <LocalPhoneIcon />
        <Tooltip title="Call us">
          <Link href="tel:978-297-1115" color="secondary">
            978-297-1115
          </Link>
        </Tooltip>
      </Stack>
      <Stack direction="row" spacing={1}>
        <FaxIcon />
        <Tooltip title="Fax number">
          <Typography>978-297-1181</Typography>
        </Tooltip>
      </Stack>

      <Stack direction="row" spacing={1}>
        <EmailIcon />
        <Tooltip title="Send us an email" enterTouchDelay={0}>
          <Link
            href="mailto:rpplastics@msn.com"
            target="_blank"
            underline="hover"
            rel="noopener"
            color="inherit"
          >
            rpplastics@msn.com
          </Link>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Contact;
