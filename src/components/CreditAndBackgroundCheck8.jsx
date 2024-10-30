import React from 'react'
import CABC8 from "../assets/CABC8.webp"
const CreditAndBackgroundCheck8 = () => {
  return (
    <div className='w-full lg:screen h-[750px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={CABC8}
                    alt="Hero"
                    className="lg:w-full lg:h-[50%] w-[90%] h-[80%] object-cover rounded-lg" 
                />
            </div>


            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Review your tenant’s credit, criminal, and eviction reports with ease.
                </h1>
                <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Our comprehensive landlord background check shares insights on your applicant’s financial health and renting history in an easy-to-digest format.
                </p>
                
            </div>
           
        </div>
    </div>
  )
}

export default CreditAndBackgroundCheck8