import React from 'react';

const About = () => {
    return (
        <section className="bg-primary text-white py-24 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h3 className="text-4xl font-black mb-8 leading-tight">Our Mission & Vision for Punjab's Prosperity</h3>
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                        The Jalandhar Institute of Drivers Training is dedicated to developing skilled, responsible, and professional drivers through structured training programs and practical learning.

                    </p>
                    <p className="text-lg text-white/80 leading-relaxed mb-10">

                        Our mission is to enhance road safety, improve employability, and bridge the skill gap in the driving, transport, and logistics sectors by delivering high-quality, industry-relevant training.
                    </p>
                    <div className="flex gap-4">
                        <div className="p-4 bg-white/10 rounded-lg">
                            <h6 className="font-bold text-xl mb-1">Our Mission</h6>
                            <p className="text-sm text-white/70">To provide safe and professional driver training.</p>
                        </div>
                        <div className="p-4 bg-white/10 rounded-lg">
                            <h6 className="font-bold text-xl mb-1">Our Vision</h6>
                            <p className="text-sm text-white/70">To be Punjab’s leading driver training institute.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-xl text-center shadow-2xl">
                        <div className="text-5xl font-black text-primary mb-2">50K+</div>
                        <div className="text-slate-600 font-bold uppercase tracking-widest text-xs">Students Trained</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl text-center shadow-2xl">
                        <div className="text-5xl font-black text-primary mb-2">35+</div>
                        <div className="text-slate-600 font-bold uppercase tracking-widest text-xs">Years of Excellence</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl text-center shadow-2xl">
                        <div className="text-5xl font-black text-primary mb-2">10+</div>
                        <div className="text-slate-600 font-bold uppercase tracking-widest text-xs">
                            Certified Professionals </div>
                    </div>
                    <div className="bg-white p-8 rounded-xl text-center shadow-2xl">
                        <div className="text-5xl font-black text-primary mb-2">5+</div>
                        <div className="text-slate-600 font-bold uppercase tracking-widest text-xs">Advanced Training Programs</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
