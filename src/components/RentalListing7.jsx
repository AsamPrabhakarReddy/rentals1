import React from 'react';
import { Link } from 'react-router-dom';
import RL71 from "../assets/RL71.webp";
import RL72 from "../assets/RL72.webp";
import RL73 from "../assets/RL73.webp";

const RentalListing7 = () => {
  return (
    <div className="w-full lg:h-screen h-[1400px] lg:mt-[10px] mt-[230px] flex flex-col items-center lg:pb-0 pb-[10px] bg-gray-200">
      <div className="max-w-[1200px] lg:mx-auto  mx-[10px] lg:px-[10px] px-[10px] text-center mt-[100px]">
        <h1 className="text-start lg:text-[55px] text-[35px] font-bold text-blue-900 leading-tight">
          Additional Rentals features for landlords
        </h1>
      </div>

      <div className="max-w-[1200px] lg:mx-auto lg:px-[20px] px-[10px] h-full grid lg:grid-cols-3 items-center">
        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={RL71} alt="Tenant Screening" />
          <h1 className="lg:text-[34px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Tenant Screening
          </h1>
          <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-4">
            Screen interested renters with trusted rental application templates and screening reports.
          </p>
          <div className="text-start lg:text-[27px] text-[20px] mt-4">
            <span className="underline font-semibold text-blue-900">
              <Link to="#">Learn More</Link>
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={RL72} alt="Online Rent Collection" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Online Rent Collection
          </h1>
          <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-4">
            Easily collect rent payments, deposits, and fees from one or multiple renters.
          </p>
          <div className="text-start lg:text-[27px] text-[20px] mt-4">
            <span className="underline font-semibold text-blue-900">
              <Link to="#">Learn More</Link>
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={RL73} alt="Lawyer-reviewed lease documents" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Lawyer-reviewed lease documents
          </h1>
          <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-4">
            Access state-specific lease agreement and addendum templates.
          </p>
          <div className="text-start lg:text-[27px] text-[20px] mt-4">
            <span className="underline font-semibold text-blue-900">
              <Link to="#">Learn More</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalListing7;
