import React from 'react'
import CABC2 from "../assets/CABC2.webp"
const CreditAndBackgroundCheck2 = () => {
  return (
    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
            A tenant background check can help you identify good candidates for your rental property and avoid costly evictions.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
            Using Rental. to screen your tenants means you get the data you need to make informed decisions about the future of your property.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={CABC2}
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
            </div>

        </div>
    </div>
</div>
  )
}

export default CreditAndBackgroundCheck2