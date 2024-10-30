import React from 'react'
import { Link } from 'react-router-dom';
import RentOnline from "../assets/rentonline.webp";
const HeroRentOnline = () => {
    return (
        <div className='w-full lg:h-screen h-[800px] lg:mt-0 mt-[20px] bg-gray-300'>
             <div className="max-w-[1400px] lg:mx-auto mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
         
          <div className=" p-8 flex flex-col justify-center">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Collect rent online stress-free
            </h1>
    
            <p className="lg:text-[20px] text-[20px] text-start  leading-relaxed mt-8">
                Save time and money by collecting rent payments, deposits, and fees in one platform. 
                Easily track all payments to ensure your tenants are paying on time.
            </p>
    
            <div className="text-start lg:text-[27px] text-[20px] mt-8">
             
              <span className="underline font-semibold text-blue-900">
                <Link to={"#"}>Learn more about online rent collection.</Link>
              </span>
            </div>
          </div>
    
     
          <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
              src={RentOnline}
              alt="Hero"
              className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
            />
          </div>
        </div>
        </div>
      );
}

export default HeroRentOnline