import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box id="contact" pt={13}>
      <Typography variant="h2" component="h2" color="secondary">
        Contact Us
      </Typography>
      <Typography variant="body1">
        R&P Plastics, LLC<br />
        202 Spruce Street<br />
        Winchendon, MA. 01475<br />
      </Typography>
      <br />
      <Typography variant="body1">
        Phone: 978-297-1115<br />
        Fax: 978-297-1181<br />
        Email: rpplastics@msn.com
      </Typography>
    </Box>
  );
};

export default Contact;
