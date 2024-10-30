import React from 'react'
import TS4 from "../assets/TS4.webp"
const TenentScreening5 = () => {
    const features = [
        {
          title: "Full Credit Report",
          description: "Includes credit score, tradelines with balances, debts, inquiries, and collections."
        },
        {
          title: "Identity Validation",
          description: "Using their SSN and knowledge-based questions, we confirm your applicants are who they claim to be."
        },
        {
          title: "Nationwide Criminal History",
          description: "Includes criminal history from all 50 states plus U.S. territories, OFAC Terrorist Watch List, Most Wanted List and Sex Offenders List."
        },
        {
          title: "Eviction Records",
          description: "Eviction records are cross-referenced across all 50 states, along with judgment information."
        }
      ];
    
      return (
        <div className='w-full lg:h-[820px] h-[1100px] lg:mt-[10px] mt-[100px]'>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1 lg:mt-[30px]">
              <img
                src={TS4}
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
            
            {/* Right Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[100px] mt-0">
             
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

export default TenentScreening5