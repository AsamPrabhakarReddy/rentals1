import React from 'react'
import RA61 from "../assets/RA61.webp"

const RentalApplications6 = () => {
  const features = [
    {
      title: "Complete renter profile",
      description: "Discover who your applicant is with a complete renter profile. Get their date of birth, contact information, pet information, and more."
    },
    {
      title: "Five-year residence history",
      description: "See your tenant’s residence history from the past five years, as well as their landlords’ contact information."
    },
    {
      title: "Automated reference checks",
      description: "We automatically email previous landlords to learn more about your tenant’s renting history."
    },
    {
      title: "Employment and income verification",
      description: "Verify income and current employment by viewing their current employer and streams of income."
    },
    {
      title: "Customize your rental application",
      description: "Create a custom rental application form with specific questions you may have for your tenant."
    },
    {
      title: "Tenant screening add-ons",
      description: "Either you or your tenant can cover the fee to add on specific reports, such as a credit or background check."
    }
  ];

  return (
    <div className='w-full lg:h-[1100px] h-[1650px] lg:mt-[10px] mt-[100px]'>
      <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
        
        {/* Image Section */}
        <div className="w-full h-full flex items-center justify-center lg:col-span-1">
          <img
            src={RA61}
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

export default RentalApplications6;
