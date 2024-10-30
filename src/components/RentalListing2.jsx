import React from 'react';
import RL2 from "../assets/RL2.webp";

const RentalListing2 = () => {
  return (
    <div className="w-full h-screen lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
      <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center">
        <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
          Find renters fast by posting your rental listing on the top rental sites they're searching on.
        </h1>
      </div>

      <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">
        <div className="flex justify-center">
          <img src={RL2} className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
        </div>
        
        <div className="p-2 flex flex-col justify-center">
          <h1 className="lg:text-[35px] text-[30px] font-semibold text-start text-blue-900 leading-tight">
            List your rental property for free across the top rental sites.
          </h1>
          <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
            Fill vacant units fast by getting your rental listing in front of millions of renters with one click.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default RentalListing2;
