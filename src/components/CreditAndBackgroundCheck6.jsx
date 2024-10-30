import React from 'react'
import CABC6 from "../assets/CABC6.webp"
import { Link } from 'react-router-dom'
const CreditAndBackgroundCheck6 = () => {
    return (
        <div className="w-full lg:h-screen h-[900px] lg:mt-[10px] mt-[100px] flex flex-col items-center lg:pb-0  bg-gray-200">
        <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center ">
          <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start leading-tight lg:mt-[50px]">
            Easily Run a Rental Background Check With Avail          
          </h1>
        </div>
    
        <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center">    

            <div className="flex justify-center">
                <img src={CABC6} className="w-full h-auto lg:w-[500px]" alt="Rental Listing" />
            </div>

          <div className="p-2 flex flex-col justify-center">
            <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight">
                Request a tenant background check.
            </h1>
            <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                <span className='font-semibold text-[22px] text-blue-900 underline'><Link to={'/register'}>Create a landlord Account</Link></span> to request a TransUnion-backed credit report, criminal background check, and nationwide eviction report from your tenant.
            </p>
            <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                Either you or your tenant can cover the fee of a credit report alone or bundle all three reports together. Screening report costs vary by location due to state laws.
            </p>
          </div>
        </div>
      </div>
      )
}

export default CreditAndBackgroundCheck6