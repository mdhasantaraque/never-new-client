import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Share/Loader";
import BikeCard from "./BikeCard";

const Bike = () => {
  const { data: allBikes = [], isLoading } = useQuery({
    queryKey: ["bikes"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/bikes`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="flex justify-center">
      <div>
        {allBikes.map((bike) => (
          <BikeCard key={bike._id} bike={bike}></BikeCard>
        ))}
      </div>
    </div>
  );
};

export default Bike;
