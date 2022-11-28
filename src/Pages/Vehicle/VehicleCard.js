import React from "react";
import BookingModal from "../../Share/BookingModal";

const VehicleCard = ({ vehicle }) => {
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
    newPrice,
  } = vehicle;
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
            <p>Use from: {purchase}</p>
            <p>Selling Price: Tk- {price}</p>
            <p>New Price: Tk- {newPrice}</p>
            {status === "booked" ? (
              <p className="text-red-600">Status: {status}</p>
            ) : (
              <p>Status: {status}</p>
            )}
            <p>Posted: {date}</p>
          </div>
          <div className="md:px-2 md:pt-6">
            <p>
              <small className="bg-yellow-600 text-white p-1 rounded">
                verified
              </small>
              Owner: {name}
            </p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Location: {location}</p>
            <div className="card-actions my-2">
              {status === "booked" ? (
                <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-accent"
                  disabled
                >
                  Book now
                </label>
              ) : (
                <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-accent"
                >
                  Book now
                </label>
              )}
              <BookingModal
                id={vehicle._id}
                categories={categories}
                price={price}
              ></BookingModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
