import React from 'react'
import CABC4 from "../assets/CABC4.webp"
const CreditAndBackgroundCheck4 = () => {
    const features = [
        {
          title: "Federal watch lists",
          description: "Cross-reference your applicant against national and federal watch lists, including America's Most Wanted."
        },
        {
          title: "State reports",
          description: "Check against each state and U.S. territory database for criminal records at the state and county levels."
        },
        {
          title: "National Sex Offender Registry",
          description: "Protect your existing tenants and local neighbors by determining if an applicant is on the National Sex Offender Registry."
        },
        {
          title: "OFAC watch lists",
          description: "Identify any potential linkage to terrorist activity with information from the Office of Foreign Asset Control (OFAC)."
        }
      ];
    
      return (
        <div className='w-full lg:h-[950px] h-[1400px] lg:mt-[10px] mt-[100px]'>
             <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center lg:mt-[100px] lg:ml-[200px] ml-[50px]">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
                    Tenant Criminal History Check
                </h1>
                <p className='lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8'>
                    Run a tenant criminal background check to better understand previous felonies and misdemeanors on their record.
                </p>
            </div>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src={CABC4}
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

export default CreditAndBackgroundCheck4