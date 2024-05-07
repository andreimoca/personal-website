import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const handleNav = () => setNav(!nav);

    return (
        <div className='py-4 mx-auto relative flex items-center justify-between'>
            <div onClick={handleNav} className='text-white absolute right-10 top-8 z-50 cursor-pointer md:hidden'>
                {nav ? <AiOutlineClose size={30} className="text-white transition duration-300" /> : <AiOutlineMenu size={30} className="text-white transition duration-300" />}
            </div>
            <ul className="hidden md:flex w-full bg-gradient-to-r from-gray-700 to-gray-900/80 backdrop-blur-lg rounded-full max-w-[600px] mx-auto justify-between items-center px-8 text-white">
                <li className='p-2'><Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-blue-400 transition duration-300">Home</Link></li>
                <li className='p-2'><Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-blue-400 transition duration-300">About</Link></li>
                <li className='p-2'><Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-blue-400 transition duration-300">Portfolio</Link></li>
                <li className='p-2'><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-blue-400 transition duration-300">Contact</Link></li>
            </ul>
            {nav && (
                <div className='fixed inset-0 bg-black/80 backdrop-blur-sm ease-in-out duration-500 flex flex-col items-center justify-center z-40'>
                    <ul className='space-y-8 text-center'>
                        <li className='p-2 text-xl text-white'><Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition duration-300" onClick={() => setNav(false)}>Home</Link></li>
                        <li className='p-2 text-xl text-white'><Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition duration-300" onClick={() => setNav(false)}>About</Link></li>
                        <li className='p-2 text-xl text-white'><Link to="portfolio" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition duration-300" onClick={() => setNav(false)}>Portfolio</Link></li>
                        <li className='p-2 text-xl text-white'><Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition duration-300" onClick={() => setNav(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
            
        </div>
    );
}

export default Navbar;
