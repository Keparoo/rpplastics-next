import { Box, Typography } from '@mui/material';

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
      <Typography variant="h4" component="h3">
        Please see a list of our available products below:
      </Typography>
    </Box>
  );
};

export default Products;
