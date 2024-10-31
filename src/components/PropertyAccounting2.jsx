import React from 'react'
import PA2 from "../assets/PA2.webp"
const PropertyAccounting2 = () => {
  return (
    <div className='w-full lg:h-screen h-[850px] lg:mt-[10px] mt-[100px] bg-gray-200'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

    <div className=" p-8 flex flex-col justify-center ">
        <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
        Our property management software for accounting can help you accurately track your finances.
        </h1>
        <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
        View the income your rental properties generate and operating expenses that accumulate over time. 
        Our system will automatically populate payments and maintenance expenses logged through Avail to your dashboard.
        </p>
        
    </div>

    
    <div className="w-full h-full flex items-center justify-center lg:col-span-1">
        <img
            src={PA2}
            alt="Hero"
            className="lg:w-full lg:h-[50%] w-[90%] h-[100%] object-cover rounded-lg" 
        />
    </div>
  
</div>
</div>
  )
}

export default PropertyAccounting2