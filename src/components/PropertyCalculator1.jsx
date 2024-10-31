import React from 'react'
import { Link } from 'react-router-dom'
const PropertyCalculator1 = () => {
  return (
    <div className='w-full lg:h-screen h-[750px] lg:mt-[150px] mt-[250px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] flex flex-col items-center justify-center h-screen  pb-10">
        <div className=" p-8 flex flex-col items-center justify-center space-y-[30px]">
            <h1 className="lg:text-[50px] text-[40px] font-bold text-center font-semibold leading-tight text-blue-900">
                Rental Property Calculator
            </h1>

            <p className="lg:text-[20px] text-[18px]  text-blue-900 font-semibold leading-relaxed mt-8">
                Calculate the Cap Rate, Cash-on-Cash Return, GRM, and IRR in 5 Minutes
            </p>

            <p className="lg:text-[20px] text-[18px]  text-gray-500 leading-relaxed mt-8">
                Use this online calculator to help you decide if a property you're considering buying makes sense, leveraging the same formulas professionals use.
            </p>

            <div className=''>
                <button className='w-[350px] p-4 bg-blue-900 text-white hover:bg-gray-600 rounded-lg uppercase font-bold'>
                    <Link to="/register">Start Calulator </Link>
                </button>
            </div>

            <div className='shadow-2xl p-4 flex flex-col space-y-2'>
                <h1 className="lg:text-[50px] text-[25px]  text-start font-semibold leading-tight text-blue-700">
                    How does the calculator work?
                </h1>

                <p className="lg:text-[20px] text-[15px]  leading-relaxed mt-8">
                    This calculator will help you determine if the investment property you're looking at is priced correctly and is worth investing in. Plug in the asking price, gross rents, and financing information, and we'll calculate cap rate, cash-on-cash return, gross rent multiplier (GRM), and internal rate of return (IRR) for you. Then, adjust your inputs (including the offer price) as you change your assumptions to see if the property is a worthwhile purchase.
                
                </p>

                <p className="lg:text-[20px] text-[15px]  leading-relaxed mt-8">
                    It's hard to give a specific "buy" or "no buy" recommendation since everyone has different thresholds of risk. However, the outputs of this calculator will give you the information you need to make an educated determination.
                    We've designed this calculator for beginners, so we'll explain everything as we go — including the inputs and outputs.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default PropertyCalculator1

