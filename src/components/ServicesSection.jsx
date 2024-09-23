import React, { useRef } from 'react';
import destination from "../assets/Services/destination.svg";
import booking from "../assets/Services/booking.svg";
import cloudy from "../assets/Services/cloudy.svg";

export default function ServicesSection() {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // Adjust the multiplier for sensitivity
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="services" className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[1184px] mb-8">
        <div className="max-w-[444px] flex flex-col">
          <span className="font-circular font-bold text-[23px] leading-[27.6px] tracking-[0.2em] text-left text-[#F85E9F]">
            Services
          </span>
          <h3 className="font-circular font-bold text-[44px] leading-[52.8px] text-left text-[#191825]">
            Our top value categories for you
          </h3>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-8 w-[1092px] h-full overflow-x-auto snap-x snap-mandatory"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Card 1 */}
          <div className="flex flex-col items-center w-[350px] h-[443px] p-8 rounded-2xl border border-l-0 snap-start">
            <img src={destination} alt="Best Tour Guide" className="w-[64px] h-[64px] mb-4" />
            <div className="flex flex-col items-center gap-4 mt-4">
              <h5 className="font-circular font-bold text-[28px] leading-[33.6px] text-center">
                Best Tour Guide
              </h5>
              <span className="font-inter text-[18px] font-normal leading-[28.8px] text-center">
                What looked like a small patch of purple grass, above five feet.
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center w-[350px] h-[443px] p-8 rounded-2xl border border-l-0 snap-start">
            <img src={booking} alt="Easy Booking" className="w-[64px] h-[64px] mb-4" />
            <div className="flex flex-col items-center gap-4 mt-4">
              <h5 className="font-circular font-bold text-[28px] leading-[33.6px] text-center">
                Easy Booking
              </h5>
              <span className="font-inter text-[18px] font-normal leading-[28.8px] text-center">
                Square, was moving across the sand in their direction.
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center w-[350px] h-[443px] p-8 rounded-2xl border border-l-0 snap-start">
            <img src={cloudy} alt="Weather Forecast" className="w-[64px] h-[64px] mb-4" />
            <div className="flex flex-col items-center gap-4 mt-4">
              <h5 className="font-circular font-bold text-[28px] leading-[33.6px] text-center">
                Weather Forecast
              </h5>
              <span className="font-inter text-[18px] font-normal leading-[28.8px] text-center">
                What looked like a small patch of purple grass, above five feet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
