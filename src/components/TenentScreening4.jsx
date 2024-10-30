import React from 'react'
import TS3 from "../assets/TS3.webp"
const TenentScreening4 = () => {
  return (
    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[45px] text-[30px] font-bold text-center font-semibold leading-tight text-blue-900">
                With our comprehensive online tenant screening, you can feel confident handing over the keys to your property.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
                Get the complete picture of any prospective tenant with a look into their financial responsibility or their background. Our online tenant screening reports ensure you have the all right information to make a decision.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={TS3}
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
            </div>

        </div>
    </div>
</div>
  )
}

export default TenentScreening4