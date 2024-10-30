import React from 'react'
import CABC5 from "../assets/CABC5.webp"
const CreditAndBackgroundCheck5 = () => {
    const features = [
        {
          title: "Check across all states",
          description: "Run an eviction background check across all 50 states and their individual county records."
        },
        {
          title: "Confirm offender name",
          description: "Confirm whether or not your applicant was involved in the eviction process."
        },
        {
          title: "Eviction summary judgment",
          description: "See the final summary judgement that was provided."
        },
        {
          title: "Eviction date",
          description: "View the dates the eviction process took place."
        }
      ];
    
      return (
        <div className='w-full lg:h-[700px] h-[850px] lg:mt-[10px] mt-[100px]'>
             <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center lg:mt-[100px] lg:ml-[200px] ml-[50px]">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
                    Tenant Eviction Report
                </h1>
                <p className='lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8'>
                    Learn if a tenant has been through a previous eviction with an eviction check for all 50 states.
                </p>
            </div>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src={CABC5}
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
            
            {/* Right Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[50px] mt-0">
             
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold">
                      {index + 1}
                    </div>
                    <div className='text-start space-y-4'>
                      <p className="text-blue-900 font-semibold lg:text-[25px]">{feature.title}</p>
                      <p className="text-gray-900 text-[16px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}

export default CreditAndBackgroundCheck5