import React from 'react';
import logo from "../assets/Logo.svg";
import facebook from "../assets/Icons/facebook.svg";
import twitter from "../assets/Icons/twitter.svg";
import instagram from "../assets/Icons/instagram.svg";

export default function Footer() {
  return (
    <footer id="footer" className="w-[1184px] h-[434px] py-16 m-auto flex relative gap-16 opacity-100" role="contentinfo">
      <div className="w-[560px] h-auto gap-16 flex flex-col opacity-100">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Travlog Logo" className="h-[40px] mr-2" />
            <span className="font-circularStd text-[24px] font-bold">Travlog</span>
          </div>
          <span className="font-inter text-left text-[16px] text-[#191825] opacity-50 mt-6">
            Contrary to popular belief, Lorem Ipsum is not simply <br /> random text. It has roots in a piece of classical Latin<br /> literature from 45 BC.
          </span>
        </div>

        <div className="flex gap-8" aria-label="Follow us on social media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={facebook} alt="Facebook" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70 transition-opacity duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitter} alt="Twitter" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70 transition-opacity duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={instagram} alt="Instagram" className="w-[32px] h-[32px] cursor-pointer hover:opacity-70 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      <div className="w-[560px] text-left h-auto gap-8 flex flex-col opacity-100">
        <div className="flex gap-16">
          <div className="w-[165.33px] flex flex-col gap-8">
            <h6 className="font-circularStd text-[18px] font-bold">Company</h6>
            <ul className="font-inter text-[16px] space-y-4">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/career" className="hover:underline">Career</a></li>
              <li><a href="/mobile" className="hover:underline">Mobile</a></li>
            </ul>
          </div>

          <div className="w-[165.33px] flex flex-col gap-8">
            <h6 className="font-circularStd text-[18px] font-bold">Contact</h6>
            <ul className="font-inter text-[16px] space-y-4">
              <li><a href="/why-travlog" className="hover:underline">Why Travlog?</a></li>
              <li><a href="/partner" className="hover:underline">Partner with us</a></li>
              <li><a href="/faqs" className="hover:underline">FAQ’s</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          <div className="w-[165.33px] flex flex-col gap-8">
            <h6 className="font-circularStd text-[18px] font-bold">Meet Us</h6>
            <p className="font-inter text-[16px]">+00 92 1234 56789</p>
            <p className="font-inter text-[16px]">info@travlog.com</p>
            <div className="font-inter text-[16px]">
              <p>205. R Street, New York</p>
              <p>BD23200</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
