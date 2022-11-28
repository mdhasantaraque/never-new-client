import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";

const BookingModal = ({ id, categories, price }) => {
  const { user } = useContext(AuthContext);

  const productId = id;
  const productCategories = categories;
  const productPrice = price;

  const handleForBooked = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const meeting = form.meeting.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      id: productId,
      buyerName: name,
      buyerEmail: email,
      buyerPhone: phone,
      buyerMeetingPlace: meeting,
    };
    fetch(`${process.env.REACT_APP_API_URL}/bookings/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("User booked successfully.");
          console.log(data);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form
            onSubmit={handleForBooked}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              readOnly
              value={productCategories}
              placeholder="Product name"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              readOnly
              value={productPrice}
              placeholder="Product Price"
              className="input w-full input-bordered "
            />

            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="meeting"
              type="text"
              placeholder="Meeting location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
