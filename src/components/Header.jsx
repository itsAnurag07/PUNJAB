import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/header-logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="JIDT Logo" className="h-10 md:h-16 w-auto object-contain" />
                    <div>
                        <h2 className="hidden md:block text-primary font-black text-[10px] md:text-sm leading-none">JALANDHAR INSTITUTE
                            <br />
                            OF DRIVERS TRAINING </h2>

                    </div>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link className="text-primary font-bold text-sm" to="/">Home</Link>
                    <Link className="text-slate-600 dark:text-slate-300 font-medium text-sm hover:text-primary transition-colors" to="/about">About Us</Link>

                    <Link className="text-slate-600 dark:text-slate-300 font-medium text-sm hover:text-primary transition-colors" to="/courses">Courses</Link>

                    {/* <Link className="text-slate-600 dark:text-slate-300 font-medium text-sm hover:text-primary transition-colors" to="/new-forms">New Forms</Link> */}

                    <Link className="text-slate-600 dark:text-slate-300 font-medium text-sm hover:text-primary transition-colors" to="/contact">Contact</Link>
                </nav>
                <Link to="/new-forms" className="hidden lg:block">
                    <button className="bg-primary hover:bg-red-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-all">
                        APPLY  NOW
                    </button>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-primary p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl py-6 px-6 flex flex-col gap-6 z-40">
                    <nav className="flex flex-col gap-4">
                        <Link className="text-primary font-bold text-lg border-b border-slate-100 pb-2" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link className="text-slate-600 dark:text-slate-300 font-medium text-lg hover:text-primary transition-colors border-b border-slate-100 pb-2" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        <Link className="text-slate-600 dark:text-slate-300 font-medium text-lg hover:text-primary transition-colors border-b border-slate-100 pb-2" to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
                        <Link className="text-slate-600 dark:text-slate-300 font-medium text-lg hover:text-primary transition-colors border-b border-slate-100 pb-2" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </nav>
                    <Link to="/new-forms" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="w-full bg-primary hover:bg-red-900 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg transition-all">
                            APPLY NOW
                        </button>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
