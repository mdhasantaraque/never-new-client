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
      {/* <div id="slide1" className="carousel-item relative w-full">
        <>
          <img src={bike} className="w-full" alt="" />
        </>

        <div className="absolute flex justify-start transform -translate-y-1/2 left-28 top-1/3">
          <h1 className="text-6xl text-primary font-bold">
            Discover <br /> your <br /> target...
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
      {bannerData.map((slide) => (
        <BannerDetails key={slide.id} slide={slide}></BannerDetails>
      ))}

      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={car} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bus} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
