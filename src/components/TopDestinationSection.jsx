import React, { useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DestinationCard from './DestinationCard';
import destinations from './DestinationItems';

export default function TopDestinationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; 

  // Handler to navigate to the next set of destinations
  const handleNext = () => {
    if (currentIndex < destinations.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handler to navigate to the previous set of destinations
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section 
      id="topDestinations" 
      className="w-[1184px] h-auto mx-auto py-16 gap-16" 
      aria-labelledby="topDestinationsHeading" 
      role="region"
    >
      <div className="w-full h-[100px] flex justify-between items-center">
        <div className="flex flex-col items-start">
          {/* Section Heading */}
          <span 
            className="font-circularStd text-[23px] text-[#F85E9F] font-bold leading-[27.6px] tracking-[0.2em]"
            id="topDestinationsHeading"
            role="heading"
            aria-level="2"
          >
            Top Destination
          </span>
          <h3 className="font-circularStd text-[44px] font-bold leading-[52.8px]">
            Explore top destinations
          </h3>
        </div>

        <div className="w-[232px] h-[100px] flex gap-[32px]">
          {/* Previous Button */}
          <button 
            className="hover:text-white w-[100px] h-[100px] rounded-full border border-black border-opacity-10 hover:bg-[#5D50C6] flex items-center justify-center"
            onClick={handlePrev}
            disabled={currentIndex === 0} 
            aria-label="Previous Destinations"
          >
            <ArrowBackRoundedIcon />
          </button>

          {/* Next Button */}
          <button 
            className="hover:text-white w-[100px] h-[100px] rounded-full border border-black border-opacity-10 hover:bg-[#5D50C6] flex items-center justify-center"
            onClick={handleNext}
            disabled={currentIndex >= destinations.length - itemsPerPage}
            aria-label="Next Destinations"
          >
            <ArrowForwardRoundedIcon />
          </button>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="w-full flex h-auto gap-8 mt-10 flex-row" role="list">
        {destinations.slice(currentIndex, currentIndex + itemsPerPage).map((destination, index) => (
          <DestinationCard 
            key={index} 
            image={destination.image} 
            title={destination.title} 
            price={destination.price} 
            location={destination.location} 
            rating={destination.rating} 
            role="listitem"
          />
        ))}
      </div>
    </section>
  );
}
