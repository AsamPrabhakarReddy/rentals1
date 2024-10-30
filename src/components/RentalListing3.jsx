import React from 'react'
import RL3 from "../assets/RL3.webp"
const RentalListing3 = () => {
  return (
    <div className='w-full lg:h-screen h-[820px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Find great renters fast
                </h1>
                <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    List your apartment, condo, townhome, or house through Rentals. to appear on highly visited sites like Realtor.com®, 
                    Apartments.com, Redfin, and more. With just one click, 
                    your rental listing will show across a dozen sites to increase your overall visibility.
                </p>
                
            </div>
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={RL3}
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
                />
            </div>
        </div>
    </div>
);
}

export default RentalListing3