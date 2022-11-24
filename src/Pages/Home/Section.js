import React from "react";
import luboil from "../../assets/banner/Luboil.png";

const Section = () => {
  return (
    <div>
      <div>
        <div className="p-6 py-12 dark:bg-violet-200 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to
                <br className="sm:hidden" />
                30% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>For Discount ! Use code:</span>
                <span className="font-bold text-lg">Never New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <img src={luboil} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Section;
