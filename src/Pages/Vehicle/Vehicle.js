import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Share/Loader";
import VehicleCard from "./VehicleCard";

const Vehicle = () => {
  const { data: allVehicles = [], isLoading } = useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/vehicles`);
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
        {allVehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
