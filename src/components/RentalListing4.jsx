import React from 'react'
import RL5 from "../assets/RL5.webp"
import { Link } from 'react-router-dom'

const RentalListing4 = () => {
  return (
    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={RL5}
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
                />
            </div>


            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                    Price your rental right
                </h1>

                <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Get insights on local rental comps and demand with our Rent Analysis report. Use our report to set a competitive rent price to include in your listing.
                </p>

                <div className="text-start lg:text-[27px] text-[20px] mt-8">
                    <span className="underline font-semibold text-blue-900">
                        <Link to={"#"}>Learn More </Link>
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default RentalListing4