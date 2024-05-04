import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear(); 

    return (
        <footer className="w-full bg-gray-800 text-white py-6 mt-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <p className="text-sm">
                        andreimoca © {year}. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Website built using React.js and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
