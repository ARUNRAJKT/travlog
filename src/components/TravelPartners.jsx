import React from 'react';
import tripadvisor from '../assets/Partners/tripadvisor.svg';
import expedia from '../assets/Partners/expedia.svg';
import booking from '../assets/Partners/booking.svg';
import airbnb from '../assets/Partners/airbnb.svg';
import orbitz from '../assets/Partners/orbitz.svg';

export default function TravelPartners() {
    return (
        <section 
            className="w-[1184px] h-auto mx-auto py-16 flex justify-between items-center opacity-100" 
            aria-label="Travel Partners"
        >
            {/* Partner logos */}
            <img src={tripadvisor} alt="Tripadvisor logo" className="h-8" />
            <img src={expedia} alt="Expedia logo" className="h-8" />
            <img src={booking} alt="Booking.com logo" className="h-8" />
            <img src={airbnb} alt="Airbnb logo" className="h-8" />
            <img src={orbitz} alt="Orbitz logo" className="h-8" />
        </section>
    );
}
