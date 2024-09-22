import React from 'react';
import workIcon from "../assets/Icons/workIcon.svg";
import playIcon from "../assets/Icons/playIcon.svg";
import earth from "../assets/Icons/earth.svg"
import path1 from "../assets/Icons/path1.svg"
import path2 from "../assets/Icons/path2.svg"
import path3 from "../assets/Icons/path3.svg"
import plain1 from "../assets/Icons/plain1.svg"
import plain2 from "../assets/Icons/plain2.svg"
import plain3 from "../assets/Icons/plain3.svg"
import location from "../assets/Icons/location.svg"
import picture1 from "../assets/Images/heroImage1.svg"
import picture2 from "../assets/Images/heroImage2.svg"
import picture3 from "../assets/Images/heroImage3.svg"
import send from "../assets/Icons/sendIcon.svg"
import addIcon from "../assets/Icons/addIcon.svg"
import locationIcon from "../assets/Icons/locationButton.svg"
export default function HeroSection() {
  return (
    <section className='flex w-[1184px] mx-auto h-[841px] py-16 gap-10'>
      {/* First block */}
      <div className='bg-white w-[412px] h-[577px] flex flex-col items-start p-6 '>
        <div className="flex items-center gap-2 justify-center">
          <button className="text-left text-[#F85E9F] font-bold text-[14px] leading-[16.8px] font-circular px-4 py-2 rounded">
            Explore the world!
          </button>
          <img
            className="w-5 h-5"
            src={workIcon}
            alt='workIcon'
          />
        </div>

        <div className='w-[412px] h-[249px] flex flex-col gap-0 opacity-100 mt-4'>
          <h1 className='font-circular text-black text-[69px] font-bold leading-[82.8px] text-left'>
            Travel <span className='font-circular text-[69px] text-[#F85E9F] font-bold leading-[82.8px]'>top destination</span> of the world
          </h1>
          <h4 className='w-[412px] h-[87px] text-left text-[#19182580] text-[18px] font-normal leading-[28.8px]'>
            We always make our customers happy by providing as many choices as possible.
          </h4>

          <div className="w-[338px] h-[56px] flex gap-4 pt-6">
            <button className="w-[141px] h-[49px] px-8 py-4 bg-[#5D50C6] text-[#EEEEEE] font-circular font-bold text-[14px] leading-[16.8px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
            <button className="flex items-center justify-center w-[181px] h-[56px] border border-transparent text-[#222831]  font-circular font-bold text-[14px] leading-[16.8px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <img src={playIcon} alt="playIcon" className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Second block */}
      <div className='w-[772px] h-[700px] flex items-center justify-center relative'>

        <div className='absolute top-0 left-0 w-full h-[287.38px] flex'>
          <img className='w-[660.23px] h-[267.68px] ' src={earth} alt="Earth" />
          <img className='absolute w-[230.38px] h-[211.88px] top-[30.01px] left-0 ' src={path1} alt='path1' />
          <img className='absolute w-[391.05px] h-[176.77px] top-[1.45px] left-[211.05px] ' src={path2} alt='path2' />
          <img className='absolute w-[127.09px] h-[220.45px] top-[23.1px] left-[625.91px] ' src={path3} alt='path3' />
          <img className='absolute w-[35.11px] h-[31.66px]  left-[101.25px] ' src={plain1} alt='plain1' />
          <img className='absolute w-[38.17px] h-[32.07px] top-[172.65px] left-[486.96px] ' src={plain2} alt='plain2' />
          <img className='absolute w-[39.18px] h-[32.07px]  left-[601.74px] ' src={plain3} alt='plain3' />
          <img className='absolute w-[16.97px] h-[24.73px]  left-[649.31px]  top-[81.93px]' src={location} alt='location' />
        </div>

        <div className='flex items-center flex-row gap-8 mt-4'>
          <div className='flex flex-col gap-8'>
            <img
              src={picture1}
              alt="View of the sea"
              className="z-0 w-[272px] h-[300px] rounded-tl-[32px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] "
            />
            <img
              src={picture2}
              alt="A person sitting"
              className="w-[272px] h-[300px] rounded-tl-[32px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] "
            />
          </div>
          <img
            src={picture3}
            alt="A person using phone"
            className="w-[272px] h-[400px] rounded-tl-[32px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] "
          />
        </div>

        <img
          src={send}
          className='absolute top-[286px] left-[2px] p-4 rounded-full '
          alt="Send"
        />

        <img
          src={addIcon}
          className='absolute top-[600px] left-[400px] p-4 rounded-full '
          alt="Add"
        />

        <button className='absolute bg-white rounded-full w-[166px] h-[56px] top-[440px] left-[608px] p-4 font-circular text-[14px] font-bold leading-[16.8px] text-left flex items-center'>
          <img src={locationIcon} className='w-[24px] h-[24px] p-1' alt="" />
          Top Places
        </button>

      </div>
    </section>
  );



}
