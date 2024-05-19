import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./productCard";

const MySwiperComponent = ({ productList }) => {
  return (
    <Swiper
      spaceBetween={10}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      //   navigation
      //   pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
      autoplay={false}
      loop={true}
      slidesPerView={1}
      breakpoints={{
        480: { slidesPerView: 2 },
        740: { slidesPerView: 4 },
        1275: { slidesPerView: 4 },
      }}
      centerInsufficientSlides={true}
      className="flex"
    >
      {productList?.map((i, index) => (
        <SwiperSlide key={index}>
          <ProductCard productDetail={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MySwiperComponent;
