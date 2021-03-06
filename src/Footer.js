import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from './Link';

const Footer = () => {
  return (
    <Box mt={8} pb={2}>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Link href="#home" color="secondary">
          Home
        </Link>
        <Link href="#about" color="secondary">
          About
        </Link>
        <Link href="#products" color="secondary">
          Products
        </Link>
        <Link href="#contact" color="secondary">
          Contact
        </Link>
      </Stack>

      <Typography mt={2} align="center" id="footer">
        Copyright &copy; 2012, R&P Plastics, LLC.
      </Typography>
    </Box>
  );
};

export default Footer;
