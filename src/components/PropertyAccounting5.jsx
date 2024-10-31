import React from 'react'
import PA5 from "../assets/PA5.webp"
const PropertyAccounting5 = () => {
    const features = [
        {
          title: "Sync Rent Payments and Logged Maintenance Costs",
          description: "Automatically syncs collected payments, maintenance costs, and other transactions without manual input."
        },
        {
          title: "Download Your Property Accounting Tracker",
          description: "Export your transactions as many times as you need, into a customizable spreadsheet that outlines the income and expenses for each rental property. You can also sort by specific transactions, payer, or amount."
        },
        {
          title: "Transaction Information",
          description: "Get an overview of each transaction, such as what unit the payment is for, the date, type of transaction, category, payer, and the amount. You can also upload receipts or invoices to transactions for future reference."
        },
        {
          title: "Manage Your Transactions",
          description: "Delete or edit each log to keep your transactions up to date."
        }
      ];
    
  return (
    <div className="w-full lg:h-[950px] h-[1350px] lg:mt-[100px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
    <div className="max-w-[1200px] lg:mx-auto  mx-[20px] text-center">
      <h1 className="lg:text-[47px] text-[30px] font-bold text-blue-900 text-start lg:ml-[0px] ml-[50px] leading-tight">
        Rental Property Management Accounting Software Tracker
      </h1>
      <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed lg:ml-[0px] ml-[50px] mt-8">
        Our easy-to-read rental property income and expense tracker outlines the date, type, category, payer, and total amount of all your transactions.
      </p>
    </div>

    <div className="max-w-[1200px] lg:mx-auto mx-[10px] grid lg:grid-cols-2 pb-10">
            
                 {/* Image Section */}
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
              <img
                src={PA5}
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
  
  )
}

export default PropertyAccounting5