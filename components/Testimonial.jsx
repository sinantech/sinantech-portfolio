"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper required modules
import { Autoplay } from "swiper/modules";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//icons
import { ImQuotesLeft } from "react-icons/im";

//data
const testimonial = [
  {
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "John Doe",
  },
  {
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "John Doe",
  },
  {
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "John Doe",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      //modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
            </div>
            <p>{person.message}</p>
            <p>{person.name}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
