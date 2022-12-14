import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddProduct = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  const imgbbKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const categories = form.categories.value;
    const condition = form.condition.value;
    const purchase = form.purchase.value;
    const price = form.price.value;
    const newPrice = form.newPrice.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const image = form.image.files[0];
    const brand = form.message.value;

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const productDetails = {
            name,
            email,
            categories,
            condition,
            purchase,
            price,
            location,
            image: imgData.data.url,
            phone,
            brand,
            date: selectedDate,
            newPrice,
          };

          fetch(`${process.env.REACT_APP_API_URL}/productDetails`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("Your product successfully added..");
                form.reset();
              } else {
                toast.error(data.message);
              }
            });
        }
      });
  };
  return (
    <div className="text-center text-neutral-content py-16 bg-zinc-200 max-h-min">
      <p>Your post date {format(selectedDate, "P")}</p>
      <div className="grid p-4 mx-auto items-end justify-center">
        <div className=" max-w-lg p-6 my-8 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-secondary dark:text-gray-900">
          <p className="font-semibold dark:text-gray-900 text-3xl">
            Add Your Product
          </p>
          <p className="font-semibold dark:text-gray-900 text-xl">
            Seller only
          </p>
          <div>
            <form
              onSubmit={handleAddProduct}
              className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid mb-2"
            >
              <div className="form-control">
                <label className="text-sm sr-only">Name</label>
                <input
                  defaultValue={user?.displayName}
                  disabled
                  name="name"
                  type="text"
                  placeholder="Owner name"
                  className="w-full rounded-md text-black focus:ring focus:ring-violet-400 dark:border-gray-700 mb-2 p-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Email</label>
                <input
                  defaultValue={user?.email}
                  disabled
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md text-black focus:ring focus:ring-violet-400 dark:border-gray-700 mb-2 p-2"
                  required
                />
              </div>
              <select
                name="categories"
                className="input input-bordered w-full max-w-xs mb-2"
              >
                <option value="">Select category</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="vehicle">Heavy Vehicle</option>
              </select>
              <select
                name="condition"
                className="input input-bordered w-full max-w-xs mb-2"
              >
                <option value="">Select condition</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
              <div className="form-control">
                <label className="text-sm sr-only">Year of purchase</label>
                <input
                  name="purchase"
                  type="text"
                  placeholder="Year of purchase"
                  className="w-full rounded-md text-black focus:ring focus:ring-violet-400 dark:border-gray-700 mb-2 p-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Price</label>
                <input
                  name="newPrice"
                  type="text"
                  placeholder="New Price"
                  className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Price</label>
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="Location"
                  className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm sr-only">Image</label>
                <p>Image</p>
                <input
                  name="image"
                  type="file"
                  placeholder="Image URL"
                  className="w-full text-black rounded-md focus:ring dark:border-gray-700 p-2 mb-2"
                  required
                />
              </div>

              <div className="form-control">
                <label className="text-sm sr-only">Phone</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-2 text-black rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                  required
                />
              </div>
              <textarea
                className="textarea textarea-accent text-black w-full h-20"
                placeholder="Brand Name"
                name="message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 font-semibold rounded btn btn-accent"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>
    </div>
  );
};

export default AddProduct;
