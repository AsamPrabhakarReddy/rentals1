import React from 'react'
import PA3 from "../assets/PA3.webp"
const PropertyAccounting3 = () => {
  return (
    <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  ">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center mt-[100px]">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight">
            Easily track property accounting for more than one property with the Avail Rental Property Accounting tool.
      </h1>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">      
      <div className="p-2 flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
            Increase visibility into all property-related transactions
        </h1>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
            Existing payments, maintenance costs, and other transactions logged through Avail will automatically sync to your dashboard. Add one-time transactions collected outside of Avail or edit transactions to keep your income and expense tracking up to date.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={PA3} className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
      </div>
      
    </div>
  </div>
  )
}

export default PropertyAccounting3