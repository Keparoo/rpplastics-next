import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box pt={13} id="about">
      <Typography variant="h2" component="h2" color="secondary">
        Our History
      </Typography>
      <Typography variant="body1">
        R&P Plastics, LLC, a family-owned and operated business, was established
        in Worcester, MA in 1999. After working in the plastics industry for
        over 25 years, John the owner, decided to go into business for himself.
        He began by leasing a small 7,000 sq. ft. facility with only 4
        extruders. Currently R&P Plastic's production line utilizes more than 20
        pieces of equipment ranging from extruders to bag machines. In 2007,
        operations moved into our 50,000 sq. ft. facility, which is the
        company's current location in Winchendon, MA.
      </Typography>
      <Typography variant="h4" component="h3">
        Why Choose R&P?
      </Typography>
      <Typography variant="body1">
        R&P Plastics, LLC is a manufacturer of poly tubing and poly bags,
        specializing in the production of narrow width poly tubing. All products
        are manufactured to your specifications by highly qualified production
        staff. R&P is dedicated to providing each customer with only the highest
        quality of service and products.
      </Typography>
    </Box>
  );
};

export default About;
