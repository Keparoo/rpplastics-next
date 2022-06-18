import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from './Link';

const Hero = () => {
  return (
    <Box pt={13} id="home">
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <Typography variant="h2" component="h1" color="secondary">
            R&P Plastics
          </Typography>
          <Typography color="secondary">
            <em>Specializing in narrow-width LDPE film</em>
          </Typography>
          <Typography variant="h5" component="h2" mt={3}>
            Manufacturers of Poly Bags and Poly Tubing since 1999
          </Typography>
        </Grid>
        <Grid item md={8} sm={12}>
          <Image
            src="/images/building_exterior.jpg"
            alt="R&P Plastics Building"
            width={730}
            height={280}
            priority
          />
          <Typography variant="body1" sx={{ maxWidth: '720px' }}>
            Welcome to R&P Plasticss! Visit the{' '}
            <Link href="#about" color="secondary">
              About
            </Link>{' '}
            section to learn more about our company. To find information about
            the products we offer, please visit the{' '}
            <Link href="#products" color="secondary">
              Products
            </Link>{' '}
            section.<br />If you have questions, care to leave a message, or
            would like to receive a quote, please{' '}
            <Link href="#contact" color="secondary">
              contact us.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
