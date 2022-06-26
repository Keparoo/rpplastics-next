import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/system';

const SlideShow = () => {
  return (
    <Box sx={{ maxWidth: '400px' }}>
      <Carousel navButtonsAlwaysVisible="true">
        <Image
          src="/images/slide_show/slide_show1_580x580.jpg"
          alt="slide show 1"
          layout="responsive"
          width={580}
          height={580}
        />
        <Image
          src="/images/slide_show/slide_show2_580x580.jpg"
          alt="slide show 2"
          layout="responsive"
          width={580}
          height={580}
        />
        <Image
          src="/images/slide_show/slide_show3_580x580.jpg"
          alt="slide show 3"
          layout="responsive"
          width={580}
          height={580}
        />
        <Image
          src="/images/slide_show/slide_show4_580x580.jpg"
          alt="slide show 4"
          layout="responsive"
          width={580}
          height={580}
        />
        <Image
          src="/images/slide_show/slide_show5_580x580.jpg"
          alt="slide show 5"
          layout="responsive"
          width={580}
          height={580}
        />
        <Image
          src="/images/slide_show/slide_show6_580x580.jpg"
          alt="slide show 6"
          layout="responsive"
          width={580}
          height={580}
        />
        <Image
          src="/images/slide_show/slide_show7_580x580.jpg"
          alt="slide show 7"
          layout="responsive"
          width={580}
          height={580}
        />
        <Image
          src="/images/slide_show/slide_show8_580x580.jpg"
          alt="slide show 8"
          layout="responsive"
          width={580}
          height={580}
        />
      </Carousel>
    </Box>
  );
};

export default SlideShow;
