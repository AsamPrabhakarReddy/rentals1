import React from 'react'

const PropertyCalculator3 = () => {
    const sections = [
        {
          title: "Gross Rent",
          description:
            "Gross rent is the total monthly rent expected from all units within the building.",
        },
        {
          title: "Monthly Income",
          description:
            "The monthly income on the property is the before tax cash flow expected monthly (gross rents minus debt service and expenses).",
        },
        {
            title: "Estimated Cash Required At Closing",
            description:
              "The total estimated cash at closing is how much money you'll likely need to bring to the table at the time of closing. This amount includes the down payment, closing costs, legal costs, and any enhancements you're doing immediately.",
          },
        {
          title: "Capitalization (Cap) Rate",
          description: "The capitalization rate shows the potential rate of return you might expect from the rental property. This is calculated by taking the net operating income (NOI) and dividing into the sales price of the property. Cap rate is the effective ROI for the property if you paid 100% cash for the purchase. Otherwise the IRR is a better metric for measuring the profitability.",
        },
        {
          title: "Cash on Cash Return",
          description: "The cash on cash return is the rate of return you can expect based on the all-in cash cost to purchase the property. This is calculated by taking the after-tax annual cash flow and dividing into the cash paid in to purchase the property.",
        },
        {
          title: "Equity Dividend Ratio",
          description: "The equity dividend ratio is the return on equity you'd expect from the property. It is calculated by dividing the after tax cash flow into the total equity on the property (i.e. down payment amount).",
        },
        {
          title: "Debt Coverage Ratio",
          description: "The debt coverage ratio measures the ability, after expenses, to pay the property's monthly mortgage and debt obligations. It is calculated by dividing Net Operating Income by the monthly Debt Service. Values over 1 suggest there is sufficient coverage and ability to pay the debt.",
        },
        {
          title: "Gross Rent Multiplier",
          description: "The gross rent multiplier (GRM) is the measurement of value of the investment over its total gross rent. It is calculated by dividing the total sales price by the annual gross rent. This can then be compared to other properties in the area, or average GRMs in the area, to get a sense of whether the asking price is relatively expensive.",
        },
        {
          title: "Breakeven Ratio",
          description: "The breakeven ratio is a measurement of how vulnerable the property is to gross rent swings and an assessment of financial leeway you have in lowered rents before the property's rent no longer covers all the expenses. This is calculated by dividing operating expenses and debt payments into the total gross rent. The lower the percentage, the more leeway you have.",
        },
        {
          title: "Internal Rate of Return (IRR)",
          description: "The internal rate of return is the effective and compounded annual rate of return you can expect if you invest in the property. This rate can be compared to other investment opportunities you have to determine if this is your best opportunity.",
        },
        {
          title: "Operating Expenses",
          description: "The operating expenses are the total costs to operate the property on a monthly basis, including things like repairs, maintenance, and insurance. Typically, properties that are newer or have less wear and tear would have an operating expense that's about 35% of the gross rent. For properties that are older or have more deferred maintenance, an expense ratio closer to 55% may be more accurate.",
        }
      ];
      
  return (
    <div className="w-full lg:h-[2000px] h-[4000px] lg:mt-[10px] mt-[120px] flex flex-col items-center lg:pb-0 pb-[10px] ">
      
      <h1 className="lg:text-[35px] text-[35px] font-bold text-center text-blue-900 mt-8">
        What are the outputs?
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
}

export default PropertyCalculator3