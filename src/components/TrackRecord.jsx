import React from 'react';
import HeroImage1 from "../assets/hero1.webp";
import HeroImage2 from "../assets/Hero.jpg";
import HeroImage3 from "../assets/track.jpg";
import HeroImage4 from "../assets/track1.jpg";

const TrackRecord = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-4 mt-0">
      <div className="p-8 bg-white  rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="w-full h-[150px] md:h-[200px]">
            <img className="w-full h-full object-cover rounded-lg" src={HeroImage1} alt="Track 1" />
          </div>
          <div className="w-full h-[150px] md:h-[200px]">
            <img className="w-full h-full object-cover rounded-lg" src={HeroImage2} alt="Track 2" />
          </div>
          <div className="w-full h-[150px] md:h-[200px]">
            <img className="w-full h-full object-cover rounded-lg" src={HeroImage3} alt="Track 3" />
          </div>
          <div className="w-full h-[150px] md:h-[200px]">
            <img className="w-full h-full object-cover rounded-lg" src={HeroImage4} alt="Track 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
