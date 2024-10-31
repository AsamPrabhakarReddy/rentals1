import React from 'react'
import { Link } from 'react-router-dom'
const RentAnalysis5 = () => {
  return (
    <div className='w-full h-[300px]  lg:mt-[20px] mt-[100px]'>
    <div className="max-w-[1200px] lg:mx-auto  mx-[10px] h-screen  pb-10">
        <div className=" p-8 flex flex-col justify-center space-y-[30px]">
            <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
            Get your Rent Analysis Report
            </h1>

            <p className="lg:text-[20px] text-[20px]  text-gray-500 leading-relaxed mt-8">
            Create an Avail account to get access to a Rent Analysis Report. Simply add the property you’d like the report for and get access to the rent data instantly.
            </p>

            <div className=''>
                <button className='w-[350px] p-4 bg-blue-900 text-white hover:bg-gray-600 rounded-lg uppercase font-bold'>
                    <Link to="/register">Get a rent analysis Report </Link>
                </button>
            </div>

        </div>
    </div>
</div>
  )
}

export default RentAnalysis5