import React from 'react';

const AboutUs = () => {
    return (
        <div className="animate-fade-in">
            {/* Breadcrumb Section */}
            <div className="bg-cream-accent dark:bg-zinc-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm font-medium">
                        <a className="text-zinc-500 dark:text-zinc-400 hover:text-primary" href="/">Home</a>
                        <span className="material-symbols-outlined text-sm text-zinc-400">chevron_right</span>
                        <span className="text-primary dark:text-zinc-100">About Us</span>
                    </nav>
                </div>
            </div>
            {/* Hero Section */}
            <section className="relative h-[150px] flex items-center justify-center bg-primary text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 b]" data-alt="Faint texture of a heavy transport truck silhouette"></div>
                <div className="relative z-10 flex flex-col gap-2 p-4">
                    <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">About Us</h1>
                    <p className="text-white/90 text-lg md:text-xl font-medium">Learn About Our Mission & Vision</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white dark:bg-zinc-900 py-16 px-4 md:px-20 lg:px-40">
                <div className="max-w-[1000px] mx-auto">
                    <div className="border-b-[3px] border-[#D4AF37] mb-8 pb-4">
                        <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-black text-center md:text-left">
                            Jalandhar Institute of Driving and Training Centre
                        </h2>
                    </div>
                    <div className="text-center md:text-justify leading-relaxed text-lg space-y-6 text-zinc-600 dark:text-zinc-400">
                        <p>
                            The Jalandhar Institute of Driving and Training Centre (JIDT) stands as a premier government-approved institution dedicated to elevating the standards of professional driving education in the region. With a specialized focus on heavy vehicle training, we bridge the gap between amateur skill levels and professional commercial competence.
                        </p>
                        <p>
                            Our state-of-the-art facility is designed to simulate real-world road conditions, providing students with the hands-on experience necessary to handle complex machinery and long-haul transportation challenges safely. At JIDT, we don't just teach people how to drive; we train them to become responsible, skilled professionals who form the backbone of our logistics industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 md:px-20 lg:px-40 bg-background-light dark:bg-zinc-900/50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-[#e7dada] dark:border-primary/10">
                        <div className="size-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                            <span className="material-symbols-outlined !text-4xl">verified_user</span>
                        </div>
                        <h3 className="text-primary dark:text-white text-xl font-bold mb-3">Government Approved</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Officially recognized and certified training center complying with all state regulations.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-[#e7dada] dark:border-primary/10">
                        <div className="size-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                            <span className="material-symbols-outlined !text-4xl">school</span>
                        </div>
                        <h3 className="text-primary dark:text-white text-xl font-bold mb-3">Expert Instructors</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Learn from certified industry professionals with decades of on-road and teaching experience.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-[#e7dada] dark:border-primary/10">
                        <div className="size-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                            <span className="material-symbols-outlined !text-4xl">local_shipping</span>
                        </div>
                        <h3 className="text-primary dark:text-white text-xl font-bold mb-3">Heavy Vehicle Specialization</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Focused curricula designed specifically for trucks, buses, and heavy industrial machinery.</p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-[#F5F5F5] dark:bg-zinc-900 py-20 px-4 md:px-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-6 p-8 bg-white dark:bg-zinc-900/30 rounded-xl shadow-sm border border-zinc-200 dark:border-primary/20">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined !text-4xl text-primary">track_changes</span>
                            <h2 className="text-primary dark:text-white text-2xl font-black">Our Mission</h2>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                            To provide accessible, high-quality driving education specifically tailored for heavy vehicle operators, fostering a culture of safety, discipline, and professional excellence on Indian highways.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 p-8 bg-white dark:bg-zinc-900/30 rounded-xl shadow-sm border border-zinc-200 dark:border-primary/20">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined !text-4xl text-primary">visibility</span>
                            <h2 className="text-primary dark:text-white text-2xl font-black">Our Vision</h2>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                            To be the leading training institute for professional drivers in the region, recognized for producing the most competent, safety-conscious, and skilled commercial drivers in the industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Facilities & Benefits */}
            <section className="py-20 px-4 md:px-20 lg:px-40 bg-white dark:bg-zinc-900">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-primary dark:text-white text-3xl font-black text-center mb-12">Our Facilities & Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary mb-4 !text-3xl">domain</span>
                            <h4 className="font-bold text-lg mb-2">Modern Facility</h4>
                            <p className="text-sm text-zinc-500">Advanced training tracks and classroom amenities.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary mb-4 !text-3xl">construction</span>
                            <h4 className="font-bold text-lg mb-2">Well-Maintained Vehicles</h4>
                            <p className="text-sm text-zinc-500">A diverse fleet of modern heavy vehicles for practical training.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary mb-4 !text-3xl">menu_book</span>
                            <h4 className="font-bold text-lg mb-2">Comprehensive Curriculum</h4>
                            <p className="text-sm text-zinc-500">Theories and practices updated with current road laws.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary mb-4 !text-3xl">schedule</span>
                            <h4 className="font-bold text-lg mb-2">Flexible Timings</h4>
                            <p className="text-sm text-zinc-500">Batch timings designed to accommodate working professionals.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary mb-4 !text-3xl">trending_up</span>
                            <h4 className="font-bold text-lg mb-2">High Success Rate</h4>
                            <p className="text-sm text-zinc-500">Consistently high licensing and placement results for graduates.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary mb-4 !text-3xl">support_agent</span>
                            <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
                            <p className="text-sm text-zinc-500">Dedicated assistance for documentation and queries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-primary py-20 px-4">
                <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]"></div>
                    <div className="flex flex-col items-center text-center gap-8">
                        <h2 className="text-primary text-3xl font-black">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                            <div className="flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <p className="font-bold text-primary">Address</p>
                                <p className="text-zinc-700">Dharam Complex, Jalandhar, Punjab</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <p className="font-bold text-primary">Phone</p>
                                <p className="text-zinc-700">+91 90560-66473<br />+91 90560-66373</p>
                            </div>
                            <div className="col-span-full flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                <p className="font-bold text-primary">Email</p>
                                <p className="text-zinc-700">info@jidtjalandhar.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="bg-[#FFFDF0] dark:bg-zinc-900 py-20 px-4 text-center">
                <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-black mb-8">Ready to Start Your Training?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg">
                        Apply Now
                    </button>
                    <button className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
