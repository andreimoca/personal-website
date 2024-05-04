import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll'; 

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav); 
    };

    return (
        <div className='py-4 mx-auto relative'>
            <div onClick={handleNav} className='text-gray-300 absolute right-10 top-10 z-30 md:hidden'>
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>
            <ul className="hidden md:flex w-full bg-gray-400/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto justify-between items-center px-5 text-gray-400">
                <li className='p-2'><Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer" activeClass="selected">Home</Link></li>
                <li className='p-2'><Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer" activeClass="selected">About</Link></li>
                <li className='p-2'><Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer" activeClass="selected">Portfolio</Link></li>
                <li className='p-2'><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer" activeClass="selected">Contact</Link></li>
            </ul>
            <div className={nav ? 'text-gray-300 fixed inset-0 bg-[#202121]/90 ease-in-out duration-500 flex flex-col items-center justify-center z-20' : 'fixed left-[-100%] z-20'}>
                <ul className='space-y-6'>
                    <li className='p-2 text-xl'><Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer" activeClass="selected" onClick={() => setNav(false)}>Home</Link></li>
                    <li className='p-2 text-xl'><Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer" activeClass="selected" onClick={() => setNav(false)}>About</Link></li>
                    <li className='p-2 text-xl'><Link to="portfolio" spy={true} smooth={true} duration={500} className="cursor-pointer" activeClass="selected" onClick={() => setNav(false)}>Portfolio</Link></li>
                    <li className='p-2 text-xl'><Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer" activeClass="selected" onClick={() => setNav(false)}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
