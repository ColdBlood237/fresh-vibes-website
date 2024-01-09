import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { nanoid } from "nanoid";

import guest from "../assets/candidate.jpg";
import guest2 from "../assets/candidate2.jpg";
import guest3 from "../assets/candidate3.jpg";
import guest4 from "../assets/candidate4.jpg";
import guest5 from "../assets/candidate5.jpg";
import guest6 from "../assets/candidate6.jpg";
import guest7 from "../assets/candidate7.jpg";

export default function GuestStars() {
  let guests = [
    {
      name: "Skye",
      img: guest3,
    },
    {
      name: "Orion Blaze",
      img: guest4,
    },
    {
      name: "Kairo Storm",
      img: guest6,
    },
    {
      name: "Solstice",
      img: guest7,
    },
  ];

  let guestsDivs = guests.map((guest) => (
    <div key={nanoid()} className="relative text-center">
      <img src={guest.img} />
      <div className="absolute top-2 left-4 text-3xl font-bold text-slate-50	">
        {guest.name}
      </div>
    </div>
  ));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-8">GUEST STARS</h1>
      <div className="w-11/12 mx-auto">
        <Slider {...settings}>{guestsDivs}</Slider>
      </div>
    </div>
  );
}
