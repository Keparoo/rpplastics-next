import { Box, Stack, Typography, Tooltip, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import Link from './Link';
import EmailForm from './EmailForm';

const Contact = () => {
  return (
    <Box id="contact" pt={13}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h2"
            component="h2"
            color="secondary"
            mb={2}
            sx={{
              fontFamily: 'Lexend Mega',
              fontSize: '36px',
              fontWeight: '700'
            }}
          >
            Contact Us
          </Typography>
          <Stack direction="row" spacing={1}>
            <MarkunreadMailboxIcon />
            <Typography variant="h6" component="p">
              R&P Plastics, LLC
            </Typography>
          </Stack>
          <Typography variant="h6" component="p" ml={4}>
            202 Spruce St<br />
            Winchendon, MA 01475-1159<br />
          </Typography>

          <Stack direction="row" spacing={1} mt={6}>
            <LocalPhoneIcon />
            <Tooltip title="Call us">
              <Link variant="h6" href="tel:978-297-1115" color="secondary">
                978-297-1115
              </Link>
            </Tooltip>
          </Stack>

          <Stack direction="row" spacing={1}>
            <FaxIcon />
            <Tooltip title="Fax number">
              <Typography variant="h6" component="p">
                978-297-1181
              </Typography>
            </Tooltip>
          </Stack>

          <Stack direction="row" spacing={1} mb={6}>
            <EmailIcon />
            <Tooltip title="Send us an email" enterTouchDelay={0}>
              <Link
                href="mailto:rpplastics@msn.com"
                target="_blank"
                rel="noopener"
                color="secondary"
                variant="h6"
              >
                rpplastics@msn.com
              </Link>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <EmailForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
