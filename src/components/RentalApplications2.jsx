
import React from 'react'
import RA2 from "../assets/RA2.webp"
import { Link } from 'react-router-dom'

const RentalApplications2 = () => {
  return (
    <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  bg-gray-200">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight">
        An online renters application provides you with in-depth information on a potential tenant when looking to fill your property.
      </h1>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">      
      <div className="p-2 flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
            Create a customizable rental application.
        </h1>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
            <span className='font-semibold text-blue-900 underline'><Link to={'/register'}>Create a landlord Account</Link></span> to request an online rental application in minutes with your tenant’s name and email address.
        </p>
        <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
            Our rental application form asks for five years of residence history, employment and income verification, as well as custom questions such as “Why are you moving?” for additional insights.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={RA2} className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
      </div>
      
    </div>
  </div>
  )
}

export default RentalApplications2