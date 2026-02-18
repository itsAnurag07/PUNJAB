import React from 'react';

const TopBar = () => {
    return (
        <div className="hidden md:flex bg-primary text-white text-xs py-2 px-4 md:px-10 flex-col md:flex-row justify-between items-center gap-2 border-b border-primary/20">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span>+91 90560-66473, +91 90560-66373</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                    <span>jaldrivingcentre@gmail.com</span>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <div className="flex gap-3">
                    <a href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
                    <a href="#"><span className="material-symbols-outlined text-[18px]">share</span></a>
                </div>
                {/* <select className="bg-transparent border-none text-xs focus:ring-0 cursor-pointer">
                    <option value="en" className="text-black">English</option>
                    <option value="ur" className="text-black">اردو</option>
                </select> */}
            </div>
        </div>
    );
};

export default TopBar;
