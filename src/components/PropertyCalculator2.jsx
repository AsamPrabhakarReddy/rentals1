import React from 'react';


const PropertyCalculator2 = () => {
    const sections = [
        {
          title: "Track repair progress",
          description:
            "This is the address of the property you're considering buying. We'll use this to geolocate and try automatically pull in some data to make the rest of the calculator easier.",
        },
        {
          title: "Monthly Rent Amount",
          description:
            "The monthly rent amount is the total gross monthly rent for each unit that you expect. When working with an agent or the current owner/landlord directly, this information is commonly stored in a document referred to as the Rent Roll.",
        },
        {
          title: "Asking Price",
          description: "The asking price is the amount the seller is asking for the property. This is not necessarily the final sales price or deal price. This is typically negotiable.",
        },
        {
          title: "Down Payment",
          description: "The down payment is the amount (or percent of the total sales price) that you plan on paying at the time the deal is closed. For most investment properties, especially if you're a first time real estate investor, the mortgage company will require you to put 25% down.",
        },
        {
          title: "Amount Financed",
          description: "The amount financed is the amount (or percent of the total sales price) that you plan on financing at the time the deal is closed. For most investment properties, especially if you're a first time real estate investor, the mortgage company finance a maximum of 75% of the property value.",
        },
        {
          title: "Interest Rate or Mortgage Rate",
          description: "The interest rate is the rate of interest the lender requires on the financing arrangement. An investment property will tend to have a higher interest rate than a primary residence. Market conditions have a huge impact on interest rates. You'll often hear about the Fed increasing or decreasing rates, and these refer to the rates banks charge each other. This can increase or decrease the general market rates. Then, your personal financial history will have an impact, including your credit score and existing debt obligations.",
        },
        {
          title: "Closing Costs",
          description: "Closing costs are the additional expenses outside of the sales price that will occur at time of closing when the property transfers to your ownership. This can include legal fees, transfer stamps/taxes, title fees, etc. Typically, you can expect to pay about 2% of the final price in closing costs.",
        },
        {
          title: "Upfront Enhancements",
          description: "Upfront enhancements are the amounts you expect to pay for immediate repairs or upgrades upon closing the property. This could be things like painting the units or replacing door locks. It can be any amount of money you plan on spending in the first few months of owning the property.",
        },
        {
          title: "Growth Rate",
          description: "The growth rate is the rate at which you plan to increase rents each year and how much you may expect the property to appreciate in value. A conservative estimate is around 2%. This can depend on macroeconomic factors like inflation as well as neighborhood changes.",
        },
        {
          title: "Expense Ratio",
          description: "The expense ratio is the ratio of expenses to total gross rent that you expect to have to cover various expenses of managing the property, including utilities, repairs, insurance, etc. On average, you can expect that about 45% of gross rents will have to go towards these costs. A safe range is between 35% for newer or well maintained properties to 55% for older properties or those with more deferred maintenance.",
        },
        {
          title: "Vacancy and Collectables Expense (V&C)",
          description: "The vacancy and collectables expense is the rate at which you expect to have some units be either vacant or unable to collect rent from a tenant. The lower the rate, the more stable you expect leasing and rent to be.",
        },
      ];
      
  return (
    <div className="w-full lg:h-[2000px] h-[4000px] lg:mt-[10px] mt-[230px] flex flex-col items-center lg:pb-0 pb-[10px] bg-gray-200">
      
      <h1 className="lg:text-[35px] text-[35px] font-bold text-center text-blue-900 mt-8">
        What are the inputs?
      </h1>
      
      <div className="max-w-[1200px] lg:mx-auto lg:px-[20px] px-[10px] h-full grid lg:grid-cols-3 items-center">
        {sections.map((section, index) => (
          <div key={index} className="p-8 flex flex-col justify-center">
            <h1 className="lg:text-[30px] text-[35px] font-bold text-start font-semibold leading-tight text-blue-900">
              {section.title}
            </h1>
            {section.description && (
              <p className="lg:text-[18px] text-[18px] text-start text-gray-500 leading-relaxed mt-8">
                {section.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCalculator2;
