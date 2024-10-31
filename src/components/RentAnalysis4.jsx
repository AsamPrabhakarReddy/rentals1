import React from 'react'
import RT41 from "../assets/RT41.webp"
import RT42 from "../assets/RT42.avif"
const RentAnalysis4 = () => {
  return (
    <div className='w-full h-screen h-[1200px] lg:mt-[30px] mt-[100px] bg-gray-200'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Create a rental listing with Avail using rent estimate data to fill vacancies fast.
            </h1>

            <p className="lg:text-[22px] text-[20px] text-gray-400 text-white leading-relaxed mt-8">
            Use the data from your Rent Analysis Report to set a competitive rent price and attract renters to your listing. Post your rental listing for free with Avail across the most popular listing sites.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src={RT42}
                alt="Hero"
                className="lg:w-[550px] lg:h-[70%] h-[68%] object-cover rounded-lg" 
            />
            </div>

        </div>

        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
                src={RT41}
                alt="Hero"
                className="lg:w-full lg:h-[630px] h-[70%] object-cover rounded-lg" 
            />
        </div>
    </div>
</div>
  )
}

export default RentAnalysis4