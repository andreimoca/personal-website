import React from 'react';
import mainLayer from '../assets/mainL.png';
import layer2 from '../assets/l3.svg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='relative h-[50vh] md:h-[92vh] overflow-hidden'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <h1 className='text-white text-3xl sm:text-3xl md:text-5xl lg:text-9xl z-30'>
                    Andrei Moca
                </h1>
                <TypeAnimation
                    sequence={[
                        "Intern @ Google Zurich", 1000,
                        "Computer Science Student", 1000,
                        "Software Developer", 1000,
                        "Competitive Programmer", 1000,
                        "Tech Enthusiast", 1000,
                        "Mathematics & Informatics Mentor", 1000
                    ]}
                    wrapper="div" 
                    cursor={true}
                    repeat={Infinity}
                    className="text-white text-xl sm:text-xl md:text-2xl lg:text-4xl z-30"
                />
            </div>
            <img src={layer2} className='hidden md:block absolute top-0 left-0 w-full h-full object-cover z-20' alt="Layer graphic"/>
            <img src={mainLayer} className='absolute top-0 left-0 w-full h-full object-cover z-10' alt="Main background"/>
        </div>
    );
}

export default Hero;