import React from 'react'
import RT2 from "../assets/RT2.webp"
const RentAnalysis2 = () => {
  return (
    <div className='w-full h-screen h-[950px] lg:mt-[30px] mt-[100px] bg-gray-600'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-white">
                Use local data to set a profitable rent price.
            </h1>

            <p className="lg:text-[22px] text-[20px] text-start text-white leading-relaxed mt-8">
                See how your property compares to similar rentals nearby with a rent estimate for your property, rent benchmarks for comparable units, county rent trends, and more.
            </p>

        </div>

        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src={RT2}
                alt="Hero"
                className="lg:w-full lg:h-[70%] h-[68%] object-cover rounded-lg" 
            />
        </div>
    </div>
</div>
  )
}

export default RentAnalysis2