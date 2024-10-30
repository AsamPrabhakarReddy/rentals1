import React from 'react';
import { Link } from 'react-router-dom';
import RL6 from "../assets/RL6.webp";

const RentalListing6 = () => {
  return (
    <div className='w-full lg:h-screen h-[800px] lg:mt-[10px] mt-[100px]'>
      <div className="max-w-[1200px] lg:mx-auto mx-[10px] h-full grid lg:grid-cols-2 pb-10">
        <div className="p-8 flex flex-col justify-center">
          <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            How to post your rental on Rentals.
          </h1>
          
          <ol className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8 list-decimal list-inside">
            <li>Add property details with high-quality images</li>
            <li>Add a detailed rental listing title and description</li>
            <li>Set your rent price and required fees</li>
            <li>Publish your rental listing to share with renters</li>
          </ol>
          
          <div className="mt-8">
            <Link 
              to={"/register"} 
              className="text-start bg-blue-900 text-white text-start font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all">
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
          <img
            src={RL6}
            alt="Hero"
            className="w-full lg:h-[70%] h-full object-cover rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default RentalListing6;
