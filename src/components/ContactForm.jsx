import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <div className="w-full lg:py-[12px] py-[30px] px-4 mx-auto lg:mt-0 mt-[50px]">
      <div className="max-w-[1400px] mx-auto p-6 bg-white rounded-lg m-4 lg:m-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="flex flex-col gap-2 text-center">
            <p className="text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-blue-900">
              Ready to get started?
            </p>
            <p className="text-[27px] sm:text-[24px] md:text-[30px] lg:text-[40px] ">
              Create an account for free.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div className="relative w-full lg:w-3/4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="border-2 border-blue-900 bg-white rounded-lg px-4 py-4 md:py-8 pr-32 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
              />
              <button 
                className="absolute right-2 lg:right-[6px] top-1/2 transform -translate-y-1/2 bg-blue-900 text-white py-2 md:py-5 px-4 lg:px-8 text-sm md:text-lg font-semibold hover:bg-blue-700 transition duration-300 rounded-lg"
              >
                <Link to="/register">Join Today</Link>
              </button>
            </div>
            <div className="text-center text-[23px] sm:text-[20px] lg:text-[30px] mt-2">
              Already a member?{" "}
              <Link to="/login" className="text-blue-900 underline">
                Sign in here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
