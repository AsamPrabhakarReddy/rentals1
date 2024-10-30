import React from 'react'
import ORC4 from "../assets/ORC4.webp"
const OnlineRentCollection4 = () => {
    const features = [
        {
          title: "Join Rentals.:",
          description: "Create a landlord account to utilize Rentals. rent collection features designed to take the stress out of getting paid. Choose between our Unlimited or Unlimited Plus plans."
        },
        {
          title: "Connect your bank account:",
          description: "Add your banking information through our trusted partner, Plaid.."
        },
        {
          title: "Create a payment list:",
          description: "Schedule rent payments, deposits, and fees for each tenant with the cost amount and the tenant's information."
        },
        {
          title: "Update payment settings: ",
          description: "Customize when to charge late fees, send rent reminders, and receive payment confirmations."
        },
        {
          title: "Get paid:",
          description: "Payments will be deposited to your account."
        }
      ];
    
      return (
        <div className='w-full lg:h-[900px] h-[1250px] lg:mt-[10px] mt-[100px]'>
          <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
            {/* left Grid - Content Section */}
            <div className="p-8 flex flex-col justify-start space-y-6 lg:mt-[100px] mt-0">  
                <p className="lg:text-[50px] text-[32px] font-bold text-start font-semibold leading-tight text-blue-900 space-y-10">
                    How to set up Rentals. rent collection
                </p>
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
               {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src={ORC4}
                alt="Hero"
                className="w-full h-auto max-h-[80%] object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>   

          </div>
        </div>
      );
}

export default OnlineRentCollection4