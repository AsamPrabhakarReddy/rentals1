import React from 'react'
import CABC3 from "../assets/CABC3.webp"
const CreditAndBackgroundCheck3 = () => {
    const features = [
        {
          title: "Credit score",
          description: "Get your applicant’s up-to-date TransUnion credit score to see how reliable they are as a credit borrower."
        },
        {
          title: "Credit insights",
          description: "Discover what’s contributing to their current credit score before signing an online rental lease agreement."
        },
        {
          title: "Account summaries",
          description: "View the current balance of all existing accounts on their credit report, as well as past due amounts."
        },
        {
          title: "Tradelines",
          description: "Determine your applicant’s reliability by getting their payment history on all of their current tradelines."
        }
      ];
    
      return (
        <div className='w-full lg:h-[850px] h-[1250px] lg:mt-[10px] mt-[100px]'>
             <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center lg:mt-[100px] lg:ml-[200px] ml-[50px]">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
                    Tenant Credit Report
                </h1>
                <p className='lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8'>
                    See how an applicant handles their personal finances and existing credit with a TransUnion-backed tenant credit check.
                </p>
            </div>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src={CABC3}
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

export default CreditAndBackgroundCheck3