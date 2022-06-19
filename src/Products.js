import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from './Link';

const Products = () => {
  return (
    <Box id="products" pt={13}>
      <Typography
        variant="h2"
        component="h2"
        color="secondary"
        sx={{
          fontFamily: 'Lexend Mega',
          fontSize: '36px',
          fontWeight: '700'
        }}
      >
        Our Products
      </Typography>
      <Typography variant="body1">
        R&P Plasticss offers a wide variety of product options. We specialize in
        manufacturing narrow width tubing starting at 1" wide and many sizes of
        poly bags up to 38" wide. R&P is committed to providing our customers
        with the highest quality of products available. We proudly use FDA
        approved materials with the proper certifications. All of our products
        are proudly made in the U.S.A.
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" component="h3" mt={2}>
            We are pleased to announce that we have extended our product line to
            include the following using blends of LDPE and LLDPE:
          </Typography>
          <ul>
            <li>Film sizes from 1&ndash;40 inches wide (lay-flat)</li>
            <li>Sheeting to 40 inches wide (DWS and SWS)</li>
            <li>C-Fold from 3&ndash;40 inches wide</li>
            <li>J-Films</li>
            <li>Lay-flat bags 3&ndash;38 inches wide</li>
            <li>Gusseted bags 8&ndash;45 inches (total inside dimensions)</li>
            <li>Star-seal bags</li>
            <li>B.O.R. or Individual bags</li>
            <li>Various colors and additives</li>
            <li>FDA-approved products available upon request </li>
          </ul>
          <Typography mb={2}>
            This is a list of our most common products; however, it is not
            everything we are capable of producing.<br />Please contact us if
            you need assistance with a product not listed above.
          </Typography>
          <Link href="/product_list.pdf" target="_blank" color="secondary">
            Download PDF of product list
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} mt={4}>
          <Image
            src="/images/products.jpg"
            alt="rolls of plastic"
            width={537}
            height={403}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
