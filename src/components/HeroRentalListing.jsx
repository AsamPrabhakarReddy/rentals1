import React from 'react'
import { Link } from 'react-router-dom';
import Hero2 from "../assets/Hero2.webp";
const HeroRentalListing = () => {
    return (
        <div className='w-full lg:h-screen h-[800px] lg:mt-0 mt-[20px] bg-gray-300  '>
             <div className="max-w-[1400px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
         
          <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            List your rental property for free on the top rental sites
           
            </h1>
    
            <p className="lg:text-[20px] text-[20px] text-start  leading-relaxed mt-8">
            Find renters fast by posting your home, condo, townhome, or 
            apartment across highly visited sites like Realtor.com, 
            Apartments.com, Redfin, Nextdoor, and more.
            </p>
    
            <div className="text-start lg:text-[27px] text-[20px] mt-8">
             
              <span className="underline font-semibold text-blue-900">
                <Link to={"#"}>Learn More about rental listings.</Link>
              </span>
            </div>
          </div>
    
     
          <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
              src={Hero2}
              alt="Hero"
              className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
            />
          </div>
        </div>
        </div>
      );
}

export default HeroRentalListing