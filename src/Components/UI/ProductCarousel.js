import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { EffectFlip } from "swiper";

import "swiper/css/bundle";

const ProductCarousel = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFlip]}
      slidesPerView={1}
      spaceBetween={0}
      effect={"flip"}
      speed={500}
      centeredSlides={true}
      rewind={true}
      navigation
      pagination
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.children}
    </Swiper>
  );
};

export default ProductCarousel;
