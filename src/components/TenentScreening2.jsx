import React from 'react'
import { TiTick } from "react-icons/ti";

const TenentScreening2 = () => {
    const grids = [
        {
          title: "Renter Profile",
          items: ["Job History", "Rental History", "Income Verification"]
        },
        {
          title: "Credit Plus",
          items: ["Job History", "Rental History", "Income Verification", "Credit Score", "Adverse Items", "Credit History"]
        },
        {
          title: "Full Screening",
          items: ["Job History", "Rental History", "Income Verification", "Credit Score", "Adverse Items", "Credit History", "Nationwide Criminal", "Terror List", "Sex Offender", "Evictions"]
        }
      ];
    
      return (
        <div className="w-full min-h-screen lg:mt-[20px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
          <div className="max-w-[1200px] lg:mx-auto mx-[20px] text-center">
            <h1 className="lg:text-[47px] text-[35px] font-bold text-blue-900 text-start leading-tight">
            Select your preferred tenant screening reports.
            </h1>
            <p className="lg:text-[25px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
            Choose which rental screening reports you want to request from a prospective tenant. Decide whether you or your applicant pays — screening report costs vary based on state laws. Then simply enter your applicant’s name and email to invite them to authorize the reports.

            </p>
          </div>
    
          <div className="w-full max-w-[1200px] lg:mx-auto mx-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start mt-10">
            {grids.map((grid, index) => (
              <div key={index} className="flex flex-col p-6 space-y-4 shadow-xl rounded-lg h-full bg-white w-full">
                <h1 className="font-semibold text-blue-900 text-xl">{grid.title}</h1>
                <ul className="space-y-3">
                  {grid.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <TiTick className="text-blue-900 text-2xl" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
}

export default TenentScreening2