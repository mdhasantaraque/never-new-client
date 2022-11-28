import { useQuery } from "@tanstack/react-query";

import Loader from "../../Share/Loader";
import CarCard from "./CarCard";

const Car = () => {
  //   const { user } = useContext(AuthContext);
  const { data: allCars = [], isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/cars`);
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
        {allCars.map((car) => (
          <CarCard key={car._id} car={car}></CarCard>
        ))}
      </div>
    </div>
  );
};

export default Car;
