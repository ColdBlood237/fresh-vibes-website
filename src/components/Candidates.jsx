import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import candidate from "../assets/candidate.jpg";

export default function Candidates() {
  const swiperRef = useRef(null);
  register();

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     console.log(swiperRef.current.breakpoints);
  //     Object.assign(swiperRef.current, {
  //       slidesPerView: 3,
  //       breakpoints: {
  //         640: {
  //           slidesPerView: 2,
  //           spaceBetween: 20,
  //         },
  //         768: {
  //           slidesPerView: 3,
  //           spaceBetween: 40,
  //         },
  //       },
  //     });
  //     swiperRef.current.initialize();
  //   }
  // }, [swiperRef]);

  return (
    <div className="mx-8">
      <h1 className="text-5xl font-bold text-center my-8">CANDIDATI</h1>
      <swiper-container
        ref={swiperRef}
        pagination="true"
        speed="500"
        loop="true"
        pagination-clickable="true"
        navigation="true"
        space-between="30"
        autoplay-delay="2000"
        slides-per-view="3"
      >
        <swiper-slide>
          <div className="rounded-lg">
            <img className="" src={candidate} />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="rounded-lg">
            <img className="" src={candidate} />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="rounded-lg">
            <img className="" src={candidate} />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="rounded-lg">
            <img className="" src={candidate} />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="rounded-lg">
            <img className="" src={candidate} />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
