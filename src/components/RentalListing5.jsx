import React from 'react'
import Hero4 from "../assets/reports_records.webp"
import { Link } from 'react-router-dom'
const RentalListing5 = () => {
  return (
   <div className='w-full lg:h-screen h-[800px] lg:mt-[10px] mt-[100px] bg-gray-200'>
        <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[45px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
                Streamlined tenant screening
                </h1>
                <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Easily request rental applications and screening reports from interested renters who inquired through your rental listing. 
                    Request rental applications, screening reports, and landlord references in one platform..
                </p>
                
                <div className="text-start lg:text-[27px] text-[20px] mt-8">
                <span className="underline font-semibold text-blue-900">
                    <Link to={"#"}>Learn More .</Link>
                </span>
            </div>

            </div>
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                src={Hero4}
                alt="Hero"
                className="w-full lg:h-[70%] h-full object-cover rounded-lg" 
                />
          </div>
        </div>
    </div>
  )
}

export default RentalListing5