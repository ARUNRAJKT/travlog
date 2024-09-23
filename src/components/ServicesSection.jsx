import React from 'react';
import destination from "../assets/Services/destination.svg";
import booking from "../assets/Services/booking.svg";
import cloudy from "../assets/Services/cloudy.svg";

export default function ServicesSection() {
  return (
    <section id="services" className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full pl-44 mb-8">
        <div className="max-w-[444px] flex flex-col">
          <span className="font-circular font-bold text-[23px] leading-[27.6px] tracking-[0.2em] text-left text-[#F85E9F]">
            Services
          </span>
          <h3 className="font-circular font-bold text-[44px] leading-[52.8px] text-left text-[#191825]">
            Our top value categories for you
          </h3>
        </div>

        <div
          className="flex gap-6 w-[1092px] h-full overflow-x-auto scroll-hidden snap-x snap-mandatory"
        >
          {/* Card 1 */}
          <div className="flex flex-col items-center w-[350px] p-16 gap-16 rounded-2xl hover:border hover:border-[#191825] shadow-custom snap-start">
            <img src={destination} alt="Best Tour Guide" className="w-[64px] h-[64px] mb-4" />
            <div className="flex flex-col items-center gap-8 mt-2 flex-grow">
              <h5 className="font-circular whitespace-nowrap font-bold text-[28px] leading-[33.6px] text-center">
                Best Tour Guide
              </h5>
              <span className="font-inter text-[18px] font-normal leading-[28.8px] opacity-50 text-[#191825] text-center">
                What looked like a small patch of purple grass, above five feet.
              </span>
            </div>
          </div>


          {/* Card 2 */}
          <div className="flex flex-col items-center w-[350px] p-16 gap-16 rounded-2xl hover:border hover:border-[#191825] shadow-custom snap-start">
            <img src={booking} alt="Easy Booking" className="w-[64px] h-[64px] mb-4" />
            <div className="flex flex-col items-center gap-8 mt-2 flex-grow">
              <h5 className="font-circular whitespace-nowrap font-bold text-[28px] leading-[33.6px] text-center">
                Easy Booking
              </h5>
              <span className="font-inter text-[18px] font-normal leading-[28.8px] opacity-50 text-[#191825] text-center">
                Square, was moving across the sand in their direction.
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center w-[350px] p-16 gap-16 rounded-2xl hover:border hover:border-[#191825] shadow-custom snap-start">
            <img src={cloudy} alt="Weather Forecast" className="w-[64px] h-[64px] mb-4" />
            <div className="flex flex-col items-center gap-8 mt-2 flex-grow">
              <h5 className="font-circular whitespace-nowrap font-bold text-[28px] leading-[33.6px] text-center">
                Weather Forecast
              </h5>
              <span className="font-inter text-[18px] font-normal leading-[28.8px] opacity-50 text-[#191825] text-center">
                What looked like a small patch of purple grass, above five feet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
