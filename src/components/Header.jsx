import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "../assets/Logo.svg";

export default function Header() {
    return (
        <header className="w-1184 mx-auto h-113  flex justify-between items-center opacity-100 z-10">
            <div className="flex items-center ">
                <img src={Logo} alt="My Icon" className="w-10 h-10 mr-2" /> 
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
                            to="#topDestinations"
                            className="text-[#19182580] hover:text-[#222831]"
                            aria-label="D"
                        >
                            Special Deals
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            to="#footer"
                            className="text-[#19182580] hover:text-[#222831]"
                            aria-label="Go to Travel Points"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center space-x-4">
                <button className="font-sans text-black  hover:bg-[#5D50C6] hover:text-white px-8 py-4 border rounded-full">Login</button>
                <button className="font-sans text-black  hover:bg-[#5D50C6] hover:text-white px-8 py-4 border rounded-full">Sign Up</button>
            </div>
        </header>
    );
}
