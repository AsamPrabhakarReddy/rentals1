import React from 'react'
import MT41 from "../assets/MT41.webp"
import MT42 from "../assets/MT42.webp"
import MT43 from "../assets/MT43.webp"
import MT44 from "../assets/MT44.webp"
import MT45 from "../assets/MT45.webp"
import MT46 from "../assets/MT46.webp"
const MaintenanceTracking4 = () => {
  return (
    <div className="w-full lg:h-screen h-[2000px] lg:mt-[10px] mt-[230px] flex flex-col items-center lg:pb-0 pb-[10px] bg-gray-200">
      
      <div className="max-w-[1200px] lg:mx-auto lg:px-[20px] px-[10px] h-full grid lg:grid-cols-3 items-center">
        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={MT41} alt="Tenant Screening" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Track repair progress
          </h1>
    
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={MT42} alt="Online Rent Collection" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Upload photos
          </h1>
        
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={MT43} alt="Lawyer-reviewed lease documents" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
            Message tenants in-app
          </h1>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={MT44} alt="Tenant Screening" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
          Share repair progress with tenants
          </h1>
    
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={MT45} alt="Online Rent Collection" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
          Loop in your own contractors
          </h1>
        
        </div>

        <div className="p-8 flex flex-col justify-center">
          <img className="h-[200px] w-[200px] text-center" src={MT46} alt="Lawyer-reviewed lease documents" />
          <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
          Keep record of repair notes and costs
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MaintenanceTracking4