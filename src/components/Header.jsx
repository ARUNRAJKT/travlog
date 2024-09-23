import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/Logo.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-1184 mx-auto h-113 flex justify-between items-center opacity-100 z-10 relative" role="banner">
            <div className="flex items-center">
                <img src={Logo} alt="Travlog Logo" className="w-10 h-10 mr-2" />
                <span className="text-lg font-bold text-[#191825]">Travlog</span>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden fixed flex items-center w-[398px] h-[112px] p-8 gap-0 justify-between opacity-100">
                <button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Navigation Menu */}
            <nav 
                id="mobile-menu" 
                className={`absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ${isMenuOpen ? 'max-h-60' : 'max-h-0 overflow-hidden'} md:max-h-none`} 
                aria-hidden={!isMenuOpen}
            >
                <ul className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0 p-4 md:p-0">
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
                            aria-label="View Special Deals"
                        >
                            Special Deals
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            to="#footer"
                            className="text-[#19182580] hover:text-[#222831]"
                            aria-label="Go to Contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
                <button className="font-sans text-black hover:bg-[#5D50C6] hover:text-white px-8 py-4 border rounded-full" aria-label="Login">Login</button>
                <button className="font-sans text-black hover:bg-[#5D50C6] hover:text-white px-8 py-4 border rounded-full" aria-label="Sign Up">Sign Up</button>
            </div>
        </header>
    );
}
