import React from 'react';

const Services = () => {
    return (
        <section className="bg-cream-accent dark:bg-background-dark py-20 px-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Core Pillars</span>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white mt-2">Comprehensive Services</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border-b-4 border-primary shadow-sm hover:shadow-xl transition-shadow group">
                        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">local_shipping</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">HMV Driver Training</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Advanced heavy motor vehicle training programs certified by international standards to ensure road safety.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border-b-4 border-primary shadow-sm hover:shadow-xl transition-shadow group">
                        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Road Safety & Defensive Driving</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Promoting road safety and developing professional driving standards across Jalandhar and the heart of Punjab.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border-b-4 border-primary shadow-sm hover:shadow-xl transition-shadow group">
                        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">verified</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Certification Programs</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Government recognized certifications in HMV/LMV driving, fleet management, and logistics for career growth.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
