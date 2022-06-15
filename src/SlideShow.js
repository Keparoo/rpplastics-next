import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/system';

const SlideShow = () => {
  return (
    <Box sx={{ maxWidth: '400px' }}>
      <Carousel navButtonsAlwaysVisible="true">
        <Image
          src="/images/slide_show/slide_show1.jpg"
          alt="slide show 1"
          width={773}
          height={773}
        />
        <Image
          src="/images/slide_show/slide_show2.jpg"
          alt="slide show 2"
          width={773}
          height={773}
        />
        <Image
          src="/images/slide_show/slide_show3.jpg"
          alt="slide show 3"
          width={773}
          height={773}
        />
        <Image
          src="/images/slide_show/slide_show4.jpg"
          alt="slide show 4"
          width={773}
          height={773}
        />
        <Image
          src="/images/slide_show/slide_show5.jpg"
          alt="slide show 5"
          width={773}
          height={773}
        />
        <Image
          src="/images/slide_show/slide_show6.jpg"
          alt="slide show 6"
          width={773}
          height={773}
        />
        <Image
          src="/images/slide_show/slide_show7.jpg"
          alt="slide show 7"
          width={773}
          height={773}
        />
        <Image
          src="/images/slide_show/slide_show8.jpg"
          alt="slide show 8"
          width={773}
          height={773}
        />
      </Carousel>
    </Box>
  );
};

export default SlideShow;
