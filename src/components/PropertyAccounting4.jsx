import React from 'react'
import PA41 from "../assets/PA41.webp"
import PA42 from "../assets/PA42.webp"
const PropertyAccounting4 = () => {
    const content = [
        {
          title: "Prepare for tax season.",
          description1: "Track your property accounting according to the IRS with categories and transaction types. Your transactions can be viewed through your dashboard or exported into a spreadsheet to share with tax professionals. The spreadsheet can be filtered by the rental property, transaction type, vendor or payer, and more.",
          image: PA41,
        },
        {
          title: "Track the performance of your rentals.",
          description1: "It’s now easier than ever to see if you’re paying more in expenses than what you’re generating in rent payments. Analyze the performance of each rental easier based on money coming in and money coming out.",
          image: PA42,
        }
      ];
    
      return (
        <div className="w-full lg:mt-[0px] lg:mb-[10px] mt-[100px] space-y-10 ">
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

export default PropertyAccounting4