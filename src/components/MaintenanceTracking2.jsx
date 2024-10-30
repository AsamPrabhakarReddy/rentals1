import React from 'react'
import MT21 from "../assets/MT21.webp"
import MT22 from "../assets/MT22.webp"
import MT23 from "../assets/MT23.webp"
const MaintenanceTracking2 = () => {
    const content = [
        {
          title: "Tenants can quickly submit maintenance requests online.",
          description1: "Your tenant can submit a maintenance request through their account whenever they need. You’ll be notified via email when a request is submitted.",
          image: MT21,
        },
        {
          title: "Easily communicate with tenants about rental property repairs.",
          description1: "With photos of the issue and in-app instant messaging, you can understand the issue in minutes without having to visit the property.",
          image: MT22,
        },
        {
          title: "Keep a record of how and when maintenance issues are resolved.",
          description1: "Tenants can see whether a maintenance ticket is pending or completed. You can even add an expense amount to the ticket to keep your financials in order, and everything is logged in your account in case you need it later.",
          image: MT23,
        }
      ];
    
      return (
        <div className="w-full lg:mt-[0px] lg:mb-[10px] mt-[100px] space-y-10 bg-gray-200">
          {content.map((item, index) => (
            <div
              key={index}
              className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 gap-8 pb-10 items-center lg:pt-0 pt-6"
            >
              {/* Conditional Column Order for Alternating Layout */}
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} w-full h-full flex items-center justify-center`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="lg:w-[80%] lg:h-[70%] w-[85%] h-[100%] object-cover rounded-lg"
                />
              </div>
    
              <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} p-8 flex flex-col justify-center`}>
                <h1 className="lg:text-[40px] text-[38px] font-bold text-start leading-tight text-blue-900">
                  {item.title}
                </h1>
                <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
                  {item.description1}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
}

export default MaintenanceTracking2