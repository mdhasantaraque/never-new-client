import React from "react";
import bike from "../../assets/banner/img-1.jpeg";
import car from "../../assets/banner/img-2.png";
import bus from "../../assets/banner/img-3.png";
import BannerDetails from "./BannerDetails";
// import "./Banner.css";

const Banner = () => {
  const bannerData = [
    {
      image: bike,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: car,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: bus,
      prev: 2,
      id: 3,
      next: 1,
    },
  ];

  return (
    <div className="carousel w-full">
      {bannerData.map((slide) => (
        <BannerDetails key={slide.id} slide={slide}></BannerDetails>
      ))}
    </div>
  );
};

export default Banner;
