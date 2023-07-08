import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#55B3D9] shadow-md shadow-zinc-800 my-1">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-start">
                    <p className="text-[#000000] text-xl">Copyright {new Date().getFullYear()} © Model Verse</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
