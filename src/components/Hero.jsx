import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="max-w-[1400px] flex  justify-center items-center mx-auto h-screen p-4">
      <div className="p-8 flex flex-col justify-center items-center bg-white/80 gap-4"> 
        <h1 className="lg:text-[70px] text-[45px] font-bold  text-blue-900 leading-tight">
          Feel good about the way
           you manage your rentals  
          with Rentals. landlord software 
       
        </h1>

        <p className="lg:text-[30px] text-[20px]   leading-relaxed mt-4">
          Find tenants, view credit history, sign leases, and collect rent on any device,
          with tools built specifically for DIY landlords.
        </p>

      
        <div className=" lg:text-[27px] text-[20px] mt-4 mb-8">
          Already a member?{" "}
          <span className="underline text-blue-900">
            <Link to={"/login"}>Sign in here.</Link>
          </span>
        </div>

       

      </div>

     
      {/* <div className="w-full h-full flex items-center justify-center lg:col-span-1">
        <img
          src={HeroImage1}
          alt="Hero"
          className="w-full h-[70%] object-cover rounded-lg" 
        />
      </div> */}

      
    </div>
  );
};

export default Hero;
