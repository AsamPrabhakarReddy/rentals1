import React from 'react'
import MT3 from "../assets/MT3.webp"
const MaintenanceTracking3 = () => {
  return (
    <div className='w-full h-screen lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center ">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
            Maintain your rental property with landlord maintenance software.
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
            Taking care of your rental property doesn’t have to be demanding. When you have a maintenance tracking portal in place, it’s easy to solve property issues quickly.
            </p>

            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={MT3}
                    alt="Hero"
                    className="lg:w-[50%] lg:h-[55%] w-[90%] h-[90%] object-cover rounded-lg" 
                />
            </div>

        </div>
    </div>
</div>
  )
}

export default MaintenanceTracking3