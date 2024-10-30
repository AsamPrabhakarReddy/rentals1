import React from 'react'
import RA4 from "../assets/RA4.webp"

const RentalApplications4 = () => {
  return (
    <div className='w-full lg:h-screen h-[750px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Experience a simple rental application process.
            </h1>
            <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                Review the full rental application and screening reports on any device to decide if the applicant meets the criteria for 
                your rental. If approved, you can draft a state-specific lease with one click.
            </p>
            
        </div>

        
        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src={RA4}
                alt="Hero"
                className="w-full h-[70%] object-cover rounded-lg" 
            />
        </div>
      
    </div>
</div>
  )
}

export default RentalApplications4