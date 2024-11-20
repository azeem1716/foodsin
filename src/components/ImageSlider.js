import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation'; // Navigation styles

// Import the required modules from their respective paths
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ImageSlider = () => {
  const slides = [
    "https://foodsinn.co/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387888-Foods-Inn-Banner-(1)Artboard-1-copy-3.jpg%3Fver%3D10&w=3840&q=90",
    "https://foodsinn.co/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387904-Foods-Inn-Banner-(1)Artboard-1-copy.jpg%3Fver%3D10&w=3840&q=90",
    "https://foodsinn.co/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387899-Foods-Inn-Banner-(1)Artboard-1-copy-2.jpg%3Fver%3D10&w=3840&q=90",
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]} // Specify the modules to use
    >
      {slides.map((url, index) => (
        <SwiperSlide key={index}>
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;