import React from 'react'
import CABC7 from "../assets/CABC7.webp"
const CreditAndBackgroundCheck7 = () => {
  return (
    <div className='w-full lg:h-600px] h-[750px] lg:mt-[10px] mt-[100px] '>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Get tenant authorization in minutes.
                </h1>
                <p className="lg:text-[15px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    We’ll reach out to your tenant with step-by-step guidance to authorize the tenant background check. Once we’ve received their approval, you’ll have access to their eviction, credit, and background check in less than five minutes.
                </p>
                
            </div>
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={CABC7}
                    alt="Hero"
                    className="lg:w-full lg:h-[40%] w-[90%] h-[80%] object-cover rounded-lg" 
                />
            </div>
        </div>
    </div>
  )
}

export default CreditAndBackgroundCheck7