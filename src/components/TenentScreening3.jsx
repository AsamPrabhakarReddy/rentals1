import React from 'react'
import TS2 from "../assets/TS2.webp"
import TS21 from "../assets/TS21.webp"
const TenentScreening3 = () => {
 
const content = [
    {
      title: "Tenants authorize the screening reports.",
      description1: "We’ll email your applicant instructions and provide step-by-step guidance for verifying their identity and authorizing the tenant screening reports.",
      description2:"Because it’s a tenant-initiated request (i.e., your tenant securely enters their own SSN), the information is pulled as a “soft” inquiry and won’t negatively impact a tenant’s credit score.",
      image: TS2,
    },
    {
        title: "Review the tenant screening reports.",
        description1: "As soon as your prospective tenant authorizes the screening reports and verifies their identity, the reports will be instantly available inside your account. We’ll also send you an email letting you know the reports are ready to be viewed.",
        description2:"Once you’ve selected a tenant, you can use our free state-specific rental lease templates to start creating a lease that’s tailored to your rental unit.",
        image: TS21,
      },

  ];

  return (
    <div className="w-full lg:mt-[10px] lg:mb-[10px] mt-[100px] space-y-10 bg-gray-200">
      {content.map((item, index) => (
        <div
          key={index}
          className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 gap-8 pb-10 items-center lg:pt-0 pt-6"
        >
          {/* Conditional Column Order for Alternating Layout */}
          <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} w-full h-full flex items-center justify-center`}>
            <img
              src={item.image}
              alt={item.title}
              className="lg:w-[60%] lg:h-[31%] w-[85%] h-[100%] object-cover rounded-lg"
            />
          </div>

          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} p-8 flex flex-col justify-center`}>
            <h1 className="lg:text-[40px] text-[38px] font-bold text-start leading-tight text-blue-900">
              {item.title}
            </h1>
            <p className="lg:text-[18px] text-[15px] text-start text-gray-500 leading-relaxed mt-8">
              {item.description1}
            </p>
            <p className="lg:text-[18px] text-[15px] text-start text-gray-500 leading-relaxed mt-8">
              {item.description2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TenentScreening3
