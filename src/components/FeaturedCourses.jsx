import React from 'react';
import { Link } from 'react-router-dom';
import Form5Image from '../assets/Form5.png';
import FuelEfficientImage from '../assets/Fuel Efficient.png';

const FeaturedCourses = () => {
    return (
        <section className="py-16 px-6 md:py-24 md:px-10 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Skills for Tomorrow</span>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2">Featured Courses</h3>
                    </div>
                    <Link to="/courses" className="text-primary font-bold flex items-center gap-2 hover:underline">
                        View All Courses <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Course Card 1: Form 5 Refresher */}
                    <div className="bg-background-light dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700">
                        <div className="h-64 bg-cover bg-center" data-alt="Hands on steering wheel of a modern truck" style={{ backgroundImage: `url('${Form5Image}')` }}></div>
                        <div className="p-8 text-center">
                            <span className="text-primary text-[9px] font-bold uppercase tracking-widest mb-2 block">Mandatory Certification</span>
                            <h5 className="text-xl font-black mb-3">Form 5 Refresher</h5>
                            <p className="text-slate-500 dark:text-slate-400 text-[15px] mb-6 leading-relaxed">
                                Standard Safety Certification designed for experienced HMV drivers to update knowledge of modern traffic regulations and safety standards.
                            </p>
                            <Link to="/new-forms" className="inline-block w-full py-2.5 bg-white dark:bg-slate-700 border-2 border-primary text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all tracking-tight">Explore Registration</Link>
                        </div>
                    </div>

                    {/* Course Card 2: Form 5A Fuel Efficient */}
                    <div className="bg-background-light dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700">
                        <div className="h-64 bg-cover bg-center" data-alt="Eco-driving fuel efficiency icons" style={{ backgroundImage: `url('${FuelEfficientImage}')` }}></div>
                        <div className="p-8 text-center">
                            <span className="text-accent-gold text-[9px] font-bold uppercase tracking-widest mb-2 block">Advanced Performance</span>
                            <h5 className="text-xl font-black mb-3">Form 5A Fuel Efficient</h5>
                            <p className="text-slate-500 dark:text-slate-400 text-[15px] mb-6 leading-relaxed">
                                Specialized training focusing on eco-driving techniques, carbon footprint reduction, and optimizing engine load for maximum fuel savings.
                            </p>
                            <Link to="/new-forms" className="inline-block w-full py-2.5 bg-white dark:bg-slate-700 border-2 border-accent-gold text-accent-gold text-sm font-bold rounded-lg hover:bg-accent-gold hover:text-white transition-all tracking-tight">Explore Registration</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
