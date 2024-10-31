import React from 'react'
import RT3 from "../assets/RT3.webp"
import RT31 from "../assets/RT31.webp"
import RT32 from "../assets/RT32.webp"
const RentAnalysis3 = () => {
  
const content = [
    {
      title: "A rent estimate based on comparable units.",
      description1: "Based on similar units nearby, we provide a comprehensive rent analysis and rent estimate to help you take the guesswork out of setting your rent price.",
      image: RT3,
    },
    {
      title: "Rental benchmarks for your property.",
      description1: "No need to spend time finding and researching nearby units. An Rentles. Rent Analysis Report shares a list of comparable properties and their rent prices in minutes.",
      image: RT31,
    },
    {
      title: "County rent trends by bedroom and unit type.",
      description1: "Get a better idea of rent and pricing trends in your area so you can make informed decisions.",
      image: RT32,
    }
  ];

  return (
    <div className="w-full lg:mt-[50px] lg:mb-[50px] mt-[100px] space-y-10 ">
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
              className="lg:w-[100%] lg:h-[90%] w-[85%] h-[100%] object-cover rounded-lg"
            />
          </div>

          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} p-8 flex flex-col justify-center`}>
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

export default RentAnalysis3

