import React from 'react'
import RA5 from "../assets/RA5.webp"
const RentalApplications5 = () => {
  return (
    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
                Protect your investment with our online rental applications.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
                We’ve crafted a comprehensive Rentals. renters application to provide you with all the data you need without the hassle for both you and your tenants.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={RA5}
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
            </div>

        </div>
    </div>
</div>
  )
}

export default RentalApplications5