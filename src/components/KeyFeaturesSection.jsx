import React from 'react';
import background from "../assets/Images/background.svg";
import feature1 from "../assets/KeyFeatures/feature1.svg";
import feature2 from "../assets/KeyFeatures/feature2.svg"; 
import feature3 from "../assets/KeyFeatures/feature3.svg"; 

export default function KeyFeaturesSection() {
  return (
    <section 
      id="keyFeatures" 
      className="w-[1312px] h-[997px] flex flex-row py-16 ml-auto justify-between" 
      aria-labelledby="keyFeaturesHeading"
    >
      {/* Left Column: Key Features Content */}
      <div className="flex flex-col text-left items-center gap-16 w-[549px] h-auto opacity-100">
        <div className="flex flex-col items-start gap-4 w-full h-auto">
          {/* Features Header */}
          <span 
            className="font-circularStd text-[23px] font-bold leading-[27.6px] text-[#F85E9F] tracking-[0.2em]"
            id="keyFeaturesHeading"
            role="heading"
            aria-level="2"
          >
            Key features
          </span>
          <h3 className="font-circularStd text-[44px] font-bold leading-[52.8px]">
            We offer the best services
          </h3>
          <span className="font-inter text-[18px] leading-[28.8px] text-[#191825] opacity-50">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </span>
        </div>

        {/* Key Feature Cards */}
        <div className="flex flex-col w-full" role="list">
          <FeatureCard 
            title="We offer best services" 
            description="Lorem Ipsum is not simply random text" 
            icon={feature1} 
          />
          <FeatureCard 
            title="Schedule your trip" 
            description="It has roots in a piece of classical" 
            icon={feature2} 
          />
          <FeatureCard 
            title="Get discounted coupons" 
            description="Lorem Ipsum is not simply random text" 
            icon={feature3} 
          />
        </div>
      </div>
      
      {/* Right Column: Background Image */}
      <img
        src={background}
        alt="Paradise on earth"
        className="w-[693px] h-[869px] object-cover"
        role="img"
        aria-label="A beautiful paradise on earth"
      />
    </section>
  );
}

// Component for individual feature cards
const FeatureCard = ({ title, description, icon }) => (
  <div 
    className="flex flex-col items-start p-8 border border-transparent rounded-[32px] hover:border-gray-300 transition duration-300 ease-in-out" 
    role="listitem" 
    aria-labelledby={title} 
    aria-describedby={description}
  >
    <div className="flex items-center gap-4">
      <div className="w-[100px] h-[100px] flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col">
        <h6 
          className="font-circularStd text-[23px] font-bold leading-[27.6px]" 
          id={title}
        >
          {title}
        </h6>
        <span 
          className="font-inter text-[18px] font-normal leading-[28.8px]" 
          id={description}
        >
          {description}
        </span>
      </div>
    </div>
  </div>
);
