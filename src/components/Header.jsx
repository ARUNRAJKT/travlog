import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MyIcon from "../assets/Icon.svg";

export default function Header() {
    return (
        <header className="bg-white w-1184 mx-auto h-113 py-8 pl-8 flex justify-between items-center opacity-100 z-10">
            <div className="flex items-center">
                <img src={MyIcon} alt="My Icon" className="w-10 h-10 mr-2" /> {/* Set width and height */}
                <span className="text-lg font-bold text-[#191825]">Travlog</span>
            </div>
            <nav>
                <ul className="flex space-x-16">
                    <li>
                        <Link
                            smooth
                            to="#home"
                            className="text-[#19182580] hover:text-[#222831]"
                            aria-label="Go to Home"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            to="#services"
                            className="text-[#19182580] hover:text-[#222831]"
                            aria-label="Go to Services"
                        >
                            Discover
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            to="#destinations"
                            className="text-[#19182580] hover:text-[#222831]"
                            aria-label="D"
                        >
                            Special Deals
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            to="#travel-points"
                            className="text-[#19182580] hover:text-[#222831]"
                            aria-label="Go to Travel Points"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center space-x-4">
                <button className="font-sans text-black px-8 py-4 border rounded">Login</button>
                <button className="font-sans text-white bg-customPurple w-[115px] h-[49px] rounded-full">Sign Up</button>
            </div>
        </header>
    );
}
