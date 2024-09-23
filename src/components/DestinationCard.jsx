
import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const DestinationCard = ({ image, title, price, location, rating }) => {
  return (
    <div className="flex flex-col w-[373.33px] h-[575px] gap-0 shadow-[0_32px_71px_0px_rgba(0,0,0,0.08)] rounded-[32px]">
      <img src={image} alt={title} className="mb-4 w-[373.33px] h-[350px]" />
      <div className="flex flex-col pt-8 gap-4">
        <div className="w-[309.33px] h-auto m-auto flex justify-between">
          <h6 className="font-circular font-bold text-[23px] leading-[27.6px] text-left">
            {title}
          </h6>
          <h6 className="font-circular text-[#F85E9F] font-bold text-[23px] leading-[27.6px] text-right">
            {price}
          </h6>
        </div>

        <div className="m-auto w-[309.33px] text-left">
          <span className="text-gray-800 font-inter text-[18px] font-normal leading-[28.8px] opacity-75">
            {location}
          </span>
          <div className="flex items-center text-[#FF5722] gap-2 mt-5">
            <span className="text-[18px] font-bold">{rating}</span>
            <StarRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
