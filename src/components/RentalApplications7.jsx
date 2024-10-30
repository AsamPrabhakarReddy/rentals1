import React from 'react';
import RA7 from "../assets/RA7.webp";
import RA71 from "../assets/RA71.webp";
import RA72 from "../assets/RA72.webp";

const RentalApplications7 = () => {
  const content = [
    {
      title: "Trusted authorizations",
      description1: "The Avail team ensures an applicant’s information is correct and up to date when requesting a digital authorization.",
      image: RA7,
    },
    {
      title: "Roommate friendly",
      description1: "Renting to more than one tenant in your rental property? Group roommates together into one online rental application to make the process less time-consuming.",
      image: RA71,
    },
    {
      title: "Compare multiple rental applications side by side.",
      description1: "Track more than one rental application and easily compare them side-by-side to identify the best fit for your rental property.",
      image: RA72,
    }
  ];

  return (
    <div className="w-full lg:mt-[10px] lg:mb-[10px] mt-[100px] space-y-10 bg-gray-200">
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
              className="lg:w-[80%] lg:h-[60%] w-[85%] h-[100%] object-cover rounded-lg"
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
};

export default RentalApplications7;
