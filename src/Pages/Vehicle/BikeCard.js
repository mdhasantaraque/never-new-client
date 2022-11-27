import React from "react";

const BikeCard = ({ bike }) => {
  const {
    image,
    name,
    email,
    categories,
    condition,
    purchase,
    price,
    location,
    phone,
    date,
    brand,
    status,
  } = bike;
  return (
    <div>
      <h1 className="text-2xl font-bold text-accent m-4">{categories}</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl mg:max-h-64 m-6">
        <figure>
          <img src={image} alt="Album" className="w-96" />
        </figure>
        <div className="md:flex px-4 justify-center text-gray-900 m-8">
          <div>
            <p className="text-xl font-bold">Brand: {brand}</p>
            <p>Condition: {condition}</p>
            <p>Date of purchase: {purchase}</p>
            <p>Price: Tk- {price}</p>
            <p>Status: {status}</p>
            <p>Posted: {date}</p>
          </div>
          <div className="md:px-2 md:pt-6">
            <h1>Owner: {name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Location: {location}</p>
            <div className="card-actions my-2">
              <button className="btn btn-sm btn-accent">Booked</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
