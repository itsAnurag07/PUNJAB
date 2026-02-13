import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/header-logo.png';

const Header = () => {
    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-0 py-2 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="JIDT Logo" className="h-16 w-auto object-contain" />
                    <div>
                        <h2 className="text-primary font-black text-sm leading-none">JALANDHAR INSTITUTE
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
                <Link to="/new-forms">
                    <button className="bg-primary hover:bg-red-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-all">
                        APPLY  NOW
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
