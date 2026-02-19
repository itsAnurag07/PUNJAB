import React from 'react';

const Courses = () => {
    return (
        <div className="animate-fade-in">
            {/* Breadcrumb Section */}
            <div className="bg-cream-accent dark:bg-zinc-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm font-medium">
                        <a className="text-zinc-500 dark:text-zinc-400 hover:text-primary" href="/">Home</a>
                        <span className="material-symbols-outlined text-sm text-zinc-400">chevron_right</span>
                        <a className="text-zinc-500 dark:text-zinc-400 hover:text-primary" href="/courses">Courses</a>
                        <span className="material-symbols-outlined text-sm text-zinc-400">chevron_right</span>
                        <span className="text-primary dark:text-zinc-100">Refresher Course For HMV Drivers</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row min-h-[500px]">
                <div className="w-full md:w-1/2 bg-zinc-200 bg-center bg-cover min-h-[300px]" data-alt="Heavy transport truck on an open highway" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC6UxI_-HI28qrFhIbTa16pmD0_gxXPV2gtI2rT3S9-cuzhXLa_C0UdkcAOdsUodyIS9gg1p8GVkF-8o_qy7ltinm0XNvRWIEk40o3BG7f43koxR6l61gF7YnL0y8zxO2dxM_nXrfxPJH0Gyya0XDbF157Iri0aWI7eVZ0PtNO8Po9zXd_KQLxC60NECXuBX0caMozp46vOvqYTxtROuDUGvTfqxG4YHSh-2c6ym_V3JV0hNVbbFwsRyaPd91mNPrUv5GhfGvjPfc')" }}>
                </div>
                <div className="w-full md:w-1/2 bg-primary text-white flex flex-col justify-center p-12 lg:p-20">
                    <span className="inline-block px-3 py-1 bg-white/20 text-xs font-bold uppercase tracking-widest rounded mb-6 w-fit">Vocational Training</span>
                    <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Refresher Course For <br /> HMV Drivers</h1>
                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-white/80">schedule</span>
                            <span className="text-lg">09:00 AM - 05:00 PM | Mon-Saturday</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-white/80">location_on</span>
                            <span className="text-lg">Jalandhar Training Center, Punjab</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a href="/new-forms" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-zinc-100 transition-all shadow-xl text-center">Register Now</a>
                        <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">Download Brochure</button>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="py-20 bg-white dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Course Overview</h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                The Heavy Motor Vehicle (HMV) Refresher Course is designed for experienced drivers seeking to update their knowledge of modern traffic regulations, safety standards, and vehicle maintenance. This mandatory certification ensures drivers remain compliant with Punjab Transport Department regulations.
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Participants will undergo intensive theoretical and practical training focusing on fuel efficiency, defensive driving, and first-aid protocols during road emergencies.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-cream-accent dark:bg-zinc-800 p-6 border-l-8 border-primary rounded-lg flex items-center gap-6">
                                <span className="material-symbols-outlined text-3xl text-primary">calendar_today</span>
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase">Duration</p>
                                    <p className="text-xl font-bold">1 Day Refresher Course</p>
                                </div>
                            </div>
                            <div className="bg-cream-accent dark:bg-zinc-800 p-6 border-l-8 border-primary rounded-lg flex items-center gap-6">
                                <span className="material-symbols-outlined text-3xl text-primary">event_repeat</span>
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase">Batch Schedule</p>
                                    <p className="text-xl font-bold">New Batch EveryDay</p>
                                </div>
                            </div>
                            <div className="bg-cream-accent dark:bg-zinc-800 p-6 border-l-8 border-primary rounded-lg flex items-center gap-6">
                                <span className="material-symbols-outlined text-3xl text-primary">map</span>
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase">Training Location</p>
                                    <p className="text-xl font-bold" data-location="Jalandhar">JIDT Jalandhar Campus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Objectives */}
            <section className="py-20 bg-cream-accent dark:bg-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-primary mb-12 text-center uppercase tracking-tight">Key Objectives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center border border-zinc-100 dark:border-zinc-700">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">gavel</span>
                            <h3 className="font-bold text-lg mb-3">Traffic Laws</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Update on latest Motor Vehicle Acts and Rules.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center border border-zinc-100 dark:border-zinc-700">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">shield</span>
                            <h3 className="font-bold text-lg mb-3">Safety First</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Implementing defensive driving techniques.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center border border-zinc-100 dark:border-zinc-700">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">medical_services</span>
                            <h3 className="font-bold text-lg mb-3">First Aid</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Essential emergency medical response skills.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center border border-zinc-100 dark:border-zinc-700">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">eco</span>
                            <h3 className="font-bold text-lg mb-3">Fuel Economy</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Advanced techniques for better fuel mileage.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center border border-zinc-100 dark:border-zinc-700">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">settings</span>
                            <h3 className="font-bold text-lg mb-3">Maintenance</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Basics of heavy vehicle mechanical upkeep.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Curriculum */}
            <section className="py-20 bg-white dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-primary mb-12 uppercase tracking-tight">Course Curriculum</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">Road Signs and Markings Deep Dive</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">Safe Overtaking and Braking Systems</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">Drunk Driving and Fatigue Management</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">GPS and Digital Navigation Aids</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">Accident Reporting Procedures</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">Public Transport Ethics and Manners</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">Environmental Hazards & Pollution Control</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="text-lg font-medium">Transport Document Management</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tight">Eligibility Criteria</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-cream-accent text-primary rounded-full flex items-center justify-center text-3xl font-black mb-6">01</div>
                            <h3 className="text-xl font-bold mb-3">License Requirement</h3>
                            <p className="text-white/80">Must hold a valid  HMV/LMV License.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-cream-accent text-primary rounded-full flex items-center justify-center text-3xl font-black mb-6">02</div>
                            <h3 className="text-xl font-bold mb-3">Age Limit</h3>
                            <p className="text-white/80">Minimum 20 years of age with professional experience.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-cream-accent text-primary rounded-full flex items-center justify-center text-3xl font-black mb-6">03</div>
                            <h3 className="text-xl font-bold mb-3">Verification</h3>
                            <p className="text-white/80">Clearance from local RTO and no major violations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Duration & Schedule Admission Types */}
            <section className="py-20 bg-cream-accent dark:bg-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-primary mb-12 text-center uppercase tracking-tight">Admission Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg border-t-8 border-primary">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold">Regular Admission</h3>
                                    <span className="bg-zinc-100 text-zinc-600 px-3 py-1 text-xs font-bold rounded">Standard</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">done</span> 1 Day Refresher Course</li>

                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">done</span> Standard Fee Structure</li>
                                </ul>
                                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-900 transition-all">Enroll Regular</button>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg border-t-8 border-primary">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold">Tatkal Admission</h3>
                                    <span className="bg-primary/10 text-primary px-3 py-1 text-xs font-bold rounded uppercase">Priority</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">done</span> 1 Day Express Module</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">done</span> Immediate Slot Allocation</li>
                                    {/* <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">done</span> Priority Certificate Processing</li> */}
                                </ul>
                                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-900 transition-all">Enroll Tatkal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements Grid */}
            <section className="py-20 bg-white dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-3xl font-black text-primary mb-12 text-center uppercase tracking-tight">Documents Required</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-cream-accent dark:bg-zinc-800 p-8 rounded-xl border border-primary/10 flex flex-col items-center text-center flex-1 min-w-[250px] max-w-xs">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">badge</span>
                            <p className="font-bold">Aadhar Card</p>
                            <p className="text-xs text-zinc-500 mt-2">Original + 2 Photocopies</p>
                        </div>
                        <div className="bg-cream-accent dark:bg-zinc-800 p-8 rounded-xl border border-primary/10 flex flex-col items-center text-center flex-1 min-w-[250px] max-w-xs">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">license</span>
                            <p className="font-bold">Original License</p>
                            <p className="text-xs text-zinc-500 mt-2">Commercial HMV Only</p>
                        </div>
                        <div className="bg-cream-accent dark:bg-zinc-800 p-8 rounded-xl border border-primary/10 flex flex-col items-center text-center flex-1 min-w-[250px] max-w-xs">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">photo_camera</span>
                            <p className="font-bold">Passport Photos</p>
                            <p className="text-xs text-zinc-500 mt-2">4 Recent Background Color</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact & Enrollment */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8 uppercase leading-tight">Secure Your Slot Today</h2>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed">
                                Join the next batch of professional HMV drivers at JIDT Jalandhar. Our expert instructors and modern facilities ensure the best training experience.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase text-white/60 tracking-wider">Call for Queries</p>
                                        <p className="text-2xl font-black">+91 90560-66473</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase text-white/60 tracking-wider">Email Us</p>
                                        <p className="text-2xl font-black">jaldrivingcentre@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-2xl text-slate-900">
                            <h3 className="text-2xl font-bold mb-6 text-primary">Inquiry Form</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                                    <input className="w-full border-zinc-300 rounded-lg p-3 focus:ring-primary focus:border-primary" placeholder="Enter your name" type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                                    <input className="w-full border-zinc-300 rounded-lg p-3 focus:ring-primary focus:border-primary" placeholder="Enter your mobile number" type="tel" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">License Type</label>
                                    <select className="w-full border-zinc-300 rounded-lg p-3 focus:ring-primary focus:border-primary">
                                        <option>HMV - Heavy Motor Vehicle</option>
                                        {/* <option>LMV - Light Motor Vehicle</option> */}
                                        {/* <option>Transporter License</option> */}
                                    </select>
                                </div>
                                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg mt-4 hover:bg-red-900 transition-all shadow-lg">Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-cream-accent dark:bg-zinc-800">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-primary mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                            <button className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <span className="font-bold">Is this certificate valid for license renewal?</span>
                                <span className="material-symbols-outlined text-primary">add</span>
                            </button>
                            <div className="hidden p-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                                <p className="text-zinc-600 dark:text-zinc-400">Yes, this certificate is mandatory for the renewal of HMV licenses as per the latest RTO guidelines in Punjab.</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                            <button className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <span className="font-bold">What are the class timings?</span>
                                <span className="material-symbols-outlined text-primary">add</span>
                            </button>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                            <button className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <span className="font-bold">Is there any residential facility available?</span>
                                <span className="material-symbols-outlined text-primary">add</span>
                            </button>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                            <button className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <span className="font-bold">What is the fee for Tatkal admission?</span>
                                <span className="material-symbols-outlined text-primary">add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
