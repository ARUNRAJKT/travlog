import React from 'react';
import groupImage from "../assets/Images/travelPoint.svg";
import frame from "../assets/Images/frame.svg";

export default function TravelPointsSection() {
  return (
    <section 
      className="w-[1312px] h-auto py-16 flex gap-0" 
      aria-labelledby="travel-points-heading" // ARIA attribute for accessibility
    >
      {/* Main image representing travel points */}
      <img
        className="w-[871px] h-[697px]"
        src={groupImage}
        alt="Illustration of travel points"
      />

      {/* Text content section */}
      <div className="flex flex-col w-[441px] h-auto gap-16">
        <div className="flex text-left flex-col w-full h-auto gap-8">
          <div>
            <span className="font-circularStd text-[23px] font-bold leading-[27.6px] tracking-[0.2em] text-[#F85E9F]">
              Travel Point
            </span>
            <h3 
              id="travel-points-heading" // Linking the heading to the ARIA label
              className="font-circularStd text-[44px] font-bold leading-[52.8px] text-left"
            >
              We help you find your dream location
            </h3>
          </div>
          <span className="font-inter text-[18px] font-normal leading-[28.8px] text-left text-[#191825] opacity-50">
            Contrary to popular belief, Lorem Ipsum is not <br/> 
            simply random text. It has roots in a piece of<br/> 
            classical Latin literature from 45 BC.
          </span>
        </div>

        {/* Statistics section */}
        <div className="flex flex-col w-full h-auto gap-8">
          <div className="flex justify-between">
            <div className="flex w-[204.5px] h-[151px] gap-4 flex-col items-center p-8 border border-gray-300 rounded-[32px]">
              <h4 className="font-circularStd text-[#FF5722] text-[35px] font-bold leading-[42px] text-center">
                500+
              </h4>
              <span className="font-inter text-[17px] font-normal leading-[28.8px] text-center">
                Holiday Packages
              </span>
            </div>
            <div className="flex w-[204.5px] gap-4 flex-col items-center p-8 border border-gray-300 rounded-[32px]">
              <h4 className="text-[#FF5722] font-circularStd text-[35px] font-bold leading-[42px] text-center">
                100
              </h4>
              <span className="font-inter text-[17px] font-normal leading-[28.8px] text-center">
                Luxury Hotels
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[204.5px] gap-4 flex-col items-center p-8 border border-gray-300 rounded-[32px]">
              <h4 className="font-circularStd text-[#FF5722] text-[35px] font-bold leading-[42px] text-center">
                7
              </h4>
              <span className="font-inter text-[17px] font-normal leading-[28.8px] text-center">
                Premium Airlines
              </span>
            </div>
            <div className="flex w-[204.5px] gap-4 flex-col items-center p-8 border border-gray-300 rounded-[32px]">
              <h4 className="text-[#FF5722] font-circularStd text-[35px] font-bold leading-[42px] text-center">
                2k+
              </h4>
              <span className="font-inter text-[17px] font-normal leading-[28.8px] text-center">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative frame image */}
      <img
        src={frame}
        alt="Decorative yellow circle"
        className="absolute top-[2676px] left-[1153px]"
      />
    </section>
  );
}
