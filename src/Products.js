import { Box, Typography } from '@mui/material';
import Link from './Link';

const Products = () => {
  return (
    <Box id="products" pt={13}>
      <Typography variant="h2" component="h2" color="secondary">
        Our Products
      </Typography>
      <Typography variant="body1">
        R&P Plastics, LLC offers a wide variety of product options. We
        specialize in manufacturing narrow width tubing starting at 1" wide and
        many sizes of poly bags up to 38" wide. R&P is committed to providing
        our customers with the highest quality of products available. We proudly
        use FDA approved materials with the proper certifications. All of our
        products are proudly made in the U.S.A.
      </Typography>

      <Typography variant="h6" component="h3" mt={2}>
        We are pleased to announce that we have extended our product line to
        include the following using blends of LDPE and LLDPE:
      </Typography>
      <ul>
        <li>Film sizes from 1" to 40" lay-flat</li>
        <li>Sheeting to 40" &mdash; DWS AND SWS</li>
        <li>C-Fold from 3" to 40”</li>
        <li>J-Films</li>
        <li>Lay-flat bags 3" to 38" wide</li>
        <li>Gusseted bags 8" to 45" total inside dimension</li>
        <li>Star seal bags</li>
        <li>B.O.R. or Individual bags</li>
        <li>Various colors and additives</li>
        <li>FDA approved products available upon request </li>
      </ul>
      <Typography mb={2}>
        This is a list of our most common products; however, it is not
        everything we are capable of producing.<br />Please contact us if you
        need assistance with a product not listed above.
      </Typography>
      <Link href="#" color="secondary">
        Download PDF of product list
      </Link>
    </Box>
  );
};

export default Products;
