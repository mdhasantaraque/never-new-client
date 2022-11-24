import React from "react";
import "./Banner.css";

const BannerDetails = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="overlay"></div>
      <img src={image} alt="" className="w-full h-full" />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-4xl font-bold text-white">
          Discover <br /> your <br /> target...
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-2/3">
        <p className="text-white">
          Anyone Can Sell and buy used motor vehicle from Anywhere.
          <br /> Don't Wait for Right Time to Sell. Feel Like Selling It, Just
          Sell It.
          <br />
          Feel Like to buy, Just Buy It.
        </p>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerDetails;
