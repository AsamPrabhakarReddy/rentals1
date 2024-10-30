import React from 'react'
import ORC2 from "../assets/ORC2.webp"
const OnlineRentCollection2 = () => {
  return (
    <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  bg-gray-200">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center mt-[100px]">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight">
      Rentals. makes collecting rent online a streamlined process for both landlords and their tenants.
      </h1>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">      
      <div className="p-2 flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
        Request payments and rental fees
        </h1>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
        Easily create payment lists for rent payments, fees, and deposits from one or multiple renters through Avail rent collection. Track payments to stay informed on processed and unpaid payments.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={ORC2} className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
      </div>
      
    </div>
  </div>
  )
}

export default OnlineRentCollection2