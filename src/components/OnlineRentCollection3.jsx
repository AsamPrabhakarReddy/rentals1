import React from 'react'
import ORC31 from "../assets/ORC31.webp"
import ORC32 from "../assets/ORC32.webp"
import ORC33 from "../assets/ORC33.webp"
const OnlineRentCollection3 = () => {
    const content = [
        {
          title: "Charge late fees in minutes",
          description1: "Set up automated late fees for renters who are officially past due on rent.",
          image: ORC31,
        },
        {
          title: "Renter-friendly features",
          description1: "Avail offers features that encourage on-time rent payments and make it easy to pay rent online. Renters can schedule payments, report on-time payments to build their credit with CreditBoost, and split payments with roommates.",
          image: ORC32,
        },
        {
          title: "Get rent payments sooner with FastPay",
          description1: "Online rent payments are transferred to your account within three business days or as soon as the next day with FastPay. Accept payments made with a debit card, credit card, or bank account.",
          image: ORC33,
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
                  className="lg:w-[80%] lg:h-[82%] w-[85%] h-[100%] object-cover rounded-lg"
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

export default OnlineRentCollection3