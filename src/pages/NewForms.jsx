import React, { useState } from 'react';
import './NewForms.css';

const NewForms = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "Which course should I choose first?",
            answer: "The Form 5 Refresher is recommended for all HMV license holders every 3-5 years to stay updated with latest government regulations. Form 5A is an advanced specialization for efficiency."
        },
        {
            question: "Is the certificate valid for RTO compliance?",
            answer: "Yes, JIDT is a government-approved training center, and our certificates are recognized for all license renewal and employment requirements."
        },
        {
            question: "What is the training schedule?",
            answer: "Classes run from 9:00 AM to 5:00 PM daily. We offer weekend batches for working professionals."
        }
    ];

    return (
        <div className="animate-fade-in relative flex min-h-screen w-full flex-col overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-primary dark:bg-[#1a0000] py-24 px-10 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
                <div className="max-w-[1200px] mx-auto text-center relative z-10">
                    <h1 className="text-white text-5xl font-black leading-tight mb-4">Choose Your Training Course</h1>
                    <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">Government Approved Heavy Motor Vehicle Training Programs</p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="px-10 -mt-16 relative z-20 mb-20">
                <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Form 5 Refresher */}
                    <div className="bg-white dark:bg-[#2d1a1a] rounded-xl shadow-xl border-2 border-transparent pricing-card-hover p-8 flex flex-col h-full transform transition-all hover:scale-105 duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-primary dark:text-white">Form 5 Refresher</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Standard Safety Certification</p>
                            </div>
                            <span className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">MOST POPULAR</span>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-[#181010] dark:text-white">₹885</span>
                            <span className="text-gray-500 text-sm font-medium">/ course</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Traffic Rules & Regulations", "First Aid Training", "Road Safety Awareness",
                                "Defensive Driving", "Vehicle Maintenance", "Rules of the Road",
                                "Signalling & Symbols", "Emergency Handling", "Mock Practical Test", "Official Certification"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-green-600 font-bold">check</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/register?course=Form 5 Refresher" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-center">
                            Select Form 5 Course <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>

                    {/* Card 2: Form 5A Fuel Efficient */}
                    <div className="bg-white dark:bg-[#2d1a1a] rounded-xl shadow-xl border-2 border-transparent pricing-card-gold-hover p-8 flex flex-col h-full transform transition-all hover:scale-105 duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-accent-gold dark:text-accent-gold">Form 5A Fuel Efficient</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Advanced Performance Training</p>
                            </div>
                            <span className="bg-accent-gold text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Advanced </span>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-[#181010] dark:text-white">₹590</span>
                            <span className="text-gray-500 text-sm font-medium">/ course</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Eco-driving Techniques", "Fuel Efficiency Mastery", "Engine Load Optimization",
                                "Carbon Footprint Reduction", "Advanced Gear Shifting", "Maintenance for Efficiency"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-green-600 font-bold">check</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/register?course=Form 5A Fuel Efficient" className="w-full bg-accent-gold text-white font-bold py-4 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 text-center">
                            Select Form 5A Course <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>

                    {/* Card 3: Combined Form 5 + 5A */}
                    <div className="bg-white dark:bg-[#2d1a1a] rounded-xl shadow-2xl border-2 border-primary/20 relative p-8 flex flex-col h-full transform transition-all hover:scale-105 duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-600">Combined Course</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Complete Certification Package</p>
                            </div>
                            <span className="bg-gradient-to-r from-primary to-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">BEST VALUE</span>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-[#181010] dark:text-white">₹1475</span>
                            <span className="text-gray-500 text-sm font-medium">/ bundle</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Includes All Form 5 Features",
                                "Includes All Form 5A Features",
                                "Comprehensive Safety Training",
                                "Fuel Efficiency Mastery",
                                "Dual Certification",

                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-primary font-bold">verified</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/register?course=Combined Form 5 and 5A" className="w-full bg-gradient-to-r from-primary to-red-700 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:to-red-800 transition-all flex items-center justify-center gap-2 text-center group">
                            Select Combined Package <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Course Comparison Table */}
            <section className="py-20 px-10 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Detailed Course Comparison</h2>
                    <div className="overflow-hidden rounded-xl border border-[#e7dada] dark:border-[#3d2a2a] bg-white dark:bg-[#2d1a1a] shadow-sm">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="px-6 py-5 text-left font-semibold">Feature</th>
                                    <th className="px-6 py-5 text-left font-semibold">Form 5 Refresher</th>
                                    <th className="px-6 py-5 text-left font-semibold">Form 5A Fuel Efficient</th>
                                    <th className="px-6 py-5 text-left font-semibold bg-primary/90">Combined Package</th>
                                </tr>

                            </thead>
                            <tbody className="divide-y divide-[#e7dada] dark:divide-[#3d2a2a]">
                                {[

                                    ["Price", "₹885 ", "₹590 ", "₹1475"],
                                    ["Primary Focus", "Safety, Ethics & Rules", "Eco-Driving & Savings", "Complete Mastery"],

                                    ["Difficulty Level", "Foundational", "Advanced Proficiency", "Expert Level"]

                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-8 py-5 font-semibold text-primary dark:text-white/80">{row[0]}</td>
                                        <td className="px-6 py-5">{row[1]}</td>
                                        <td className="px-6 py-5">{row[2]}</td>
                                        <td className="px-6 py-5 font-bold text-primary dark:text-white">{row[3]}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-10">
                <div className="max-w-[1100px] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-[#2d1a1a] p-8 rounded-xl shadow-md border-l-8 border-primary relative">
                            <span className="material-symbols-outlined text-primary/10 text-7xl absolute top-4 right-4">format_quote</span>
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(n => <span key={n} className="material-symbols-outlined text-accent-gold fill-current">star</span>)}
                            </div>
                            <p className="text-lg italic mb-6">"The Form 5 Refresher course gave me the confidence I needed to handle heavy loads on mountain roads. The instructors are top-notch."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">person</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Rajesh Kumar</h4>
                                    <p className="text-sm text-gray-500">Fleet Driver, Punjab Logistics</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#2d1a1a] p-8 rounded-xl shadow-md border-l-8 border-accent-gold relative">
                            <span className="material-symbols-outlined text-accent-gold/10 text-7xl absolute top-4 right-4">format_quote</span>
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(n => <span key={n} className="material-symbols-outlined text-accent-gold fill-current">star</span>)}
                            </div>
                            <p className="text-lg italic mb-6">"I switched to Form 5A techniques and saved almost 15% on fuel costs in the first month. This course pays for itself in weeks!"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-accent-gold">person</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Gurpreet Singh</h4>
                                    <p className="text-sm text-gray-500">Owner-Operator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-10 bg-white dark:bg-background-dark">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-[#e7dada] dark:border-[#3d2a2a] rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left bg-primary/5 hover:bg-primary/10 transition-colors"
                                >
                                    <span className="font-bold text-primary dark:text-white">{faq.question}</span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'py-5 max-h-40' : 'max-h-0'}`}>
                                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-primary py-16 px-10 text-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
                        <div>
                            <div className="text-5xl font-black mb-2">1000+</div>
                            <p className="text-white/70 font-medium">Drivers Trained</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">15+</div>
                            <p className="text-white/70 font-medium">Years Excellence</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">98%</div>
                            <p className="text-white/70 font-medium">Placement Rate</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <h2 className="text-3xl font-bold md:mr-12 text-center md:text-left">Ready to advance your career?</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/register?course=Form 5 Refresher" className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all text-center">Enroll for Form 5</a>
                            <a href="/register?course=Form 5A Fuel Efficient" className="bg-accent-gold text-white px-10 py-4 rounded-lg font-bold hover:brightness-110 transition-all text-center">Enroll for Form 5A</a>
                            <a href="/register?course=Combined Form 5 & 5A" className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all text-center border-2 border-white">Enroll in Combined Course</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewForms;
