import React from 'react'
import RA3 from "../assets/RA3.webp"
const RentalApplications3 = () => {
  return (
    <div className='w-full lg:h-[600px] h-[700px] lg:mt-[10px] lg:mb-[10px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">

        <div className="w-full h-full  flex items-center justify-center lg:col-span-1">
            <img
                src={RA3}
                alt="Hero"
                className="lg:w-[80%] lg:h-[30%] w-[85%] h-[100%] object-cover rounded-lg"
            />
        </div>


        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[40px] text-[38px] font-bold text-start font-semibold leading-tight text-blue-900">
            We make sure your tenant completes the application for your rental property.
            </h1>

            <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
                Your tenant will receive easy-to-follow instructions on how to complete an Rentals. online renters application from any device.
            </p>

            <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
            Rentals. automatically contacts their previous landlords to see whether they paid their rent on time and took care of the rental property. Once completed, you’ll be able to review the results directly within your Rentals. account.
            </p>

        </div>
    </div>
</div>
  )
}

export default RentalApplications3