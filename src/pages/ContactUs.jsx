import React, { useState } from 'react';

const ContactUs = () => {
    // Add simple state to make FAQ interactive
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="animate-fade-in">
            {/* Breadcrumb Section */}
            <div className="bg-cream-accent dark:bg-zinc-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm font-medium">
                        <a className="text-zinc-500 dark:text-zinc-400 hover:text-primary" href="/">Home</a>
                        <span className="material-symbols-outlined text-sm text-zinc-400">chevron_right</span>
                        <span className="text-primary dark:text-zinc-100">Contact Us</span>
                    </nav>
                </div>
            </div>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-4">Contact Us</h1>
                    <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Get in Touch with Our Training Experts and start your journey towards becoming a certified professional driver.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 pb-12">
                <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Contact Information */}
                    <div className="lg:w-[45%] p-8 lg:p-12 bg-white dark:bg-zinc-900">
                        <h2 className="text-primary text-3xl font-bold mb-8">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary bg-gray-50 dark:bg-zinc-800 p-6 rounded-r-lg flex items-start gap-4 shadow-sm">
                                <div className="text-primary mt-1">
                                    <span className="material-symbols-outlined text-3xl font-light">location_on</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 dark:text-gray-200">Our Location</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Dharam Complex, Near Bus Stand,<br />Kartarpur, Jalandhar, Punjab</p>
                                </div>
                            </div>
                            <div className="border-l-4 border-primary bg-gray-50 dark:bg-zinc-800 p-6 rounded-r-lg flex items-start gap-4 shadow-sm">
                                <div className="text-primary mt-1">
                                    <span className="material-symbols-outlined text-3xl font-light">call</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 dark:text-gray-200">Phone Number</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+91 90560-66373</p>
                                    <p className="text-gray-600 dark:text-gray-400">+91 98140-55234</p>
                                </div>
                            </div>
                            <div className="border-l-4 border-primary bg-gray-50 dark:bg-zinc-800 p-6 rounded-r-lg flex items-start gap-4 shadow-sm">
                                <div className="text-primary mt-1">
                                    <span className="material-symbols-outlined text-3xl font-light">mail</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 dark:text-gray-200">Email Support</h3>
                                    <p className="text-gray-600 dark:text-gray-400">info@jidtjalandhar.com</p>
                                    <p className="text-gray-600 dark:text-gray-400">support@jidt.in</p>
                                </div>
                            </div>
                            <div className="border-l-4 border-primary bg-gray-50 dark:bg-zinc-800 p-6 rounded-r-lg flex items-start gap-4 shadow-sm">
                                <div className="text-primary mt-1">
                                    <span className="material-symbols-outlined text-3xl font-light">schedule</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 dark:text-gray-200">Office Hours</h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">Monday - Saturday</p>
                                    <p className="text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM</p>
                                    <p className="text-red-600 text-xs mt-1 font-bold">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-[55%] p-8 lg:p-12 bg-gray-50 dark:bg-zinc-800/50 border-l border-gray-100 dark:border-zinc-800">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-2 dark:text-gray-200">Send us a Message</h2>
                            <p className="text-gray-500 dark:text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                                    <input className="w-full rounded-lg border-gray-300 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 placeholder-gray-400" placeholder="e.g. Rahul Sharma" type="text" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                                    <input className="w-full rounded-lg border-gray-300 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 placeholder-gray-400" placeholder="+91" type="tel" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                                <input className="w-full rounded-lg border-gray-300 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 placeholder-gray-400" placeholder="rahul@example.com" type="email" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                                    <select className="w-full rounded-lg border-gray-300 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100">
                                        <option>General Inquiry</option>
                                        <option>Admission Help</option>
                                        <option>Certificate Verification</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Course Interest</label>
                                    <select className="w-full rounded-lg border-gray-300 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100">
                                        <option>Light Motor Vehicle (LMV)</option>
                                        <option>Heavy Motor Vehicle (HMV)</option>
                                        <option>Defensive Driving</option>
                                        <option>Hazardous Goods Training</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                                <textarea className="w-full rounded-lg border-gray-300 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 placeholder-gray-400" placeholder="How can we help you?" rows="4"></textarea>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-red-900 transition-all shadow-lg flex items-center justify-center gap-2" type="submit">
                                <span className="material-symbols-outlined font-light">send</span>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* Map Section */}
            <section className="relative">
                <div className="relative h-[600px] w-full overflow-hidden">
                    <div className="absolute inset-0 map-inset-shadow z-10 pointer-events-none"></div>
                    <div className="w-full h-full bg-zinc-100 flex items-center justify-center overflow-hidden">
                        <iframe
                            className="w-full h-full border-0"
                            src="https://maps.google.com/maps?q=Dharam%20Complex%2C%20G.T.%20Road%2C%20Kartarpur%2C%20Jalandhar%2C%20144801&t=p&z=15&ie=UTF8&iwloc=&output=embed"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map Location of JIDT"
                        ></iframe>
                    </div>
                    <div className="absolute top-8 right-8 z-30">
                        <button className="bg-white/90 backdrop-blur-md border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white px-8 py-3 rounded-full font-medium text-sm letter-spacing-premium shadow-xl flex items-center gap-3 transition-all">
                            <span className="material-symbols-outlined font-light text-lg">directions_car</span>
                            GET DIRECTIONS
                        </button>
                    </div>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-40">
                        <div className="glass-effect rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row gap-2">
                            <button className="flex-1 flex items-center justify-center gap-4 py-5 px-6 text-primary hover:bg-primary hover:text-white rounded-xl transition-all duration-300 group">
                                <span className="material-symbols-outlined font-light text-2xl group-hover:scale-110 transition-transform">call</span>
                                <span className="text-xs font-bold uppercase letter-spacing-premium">Call Training Center</span>
                            </button>
                            <div className="hidden md:block w-px h-10 bg-gray-200 self-center"></div>
                            <button className="flex-1 flex items-center justify-center gap-4 py-5 px-6 text-whatsapp-green hover:bg-whatsapp-green hover:text-white rounded-xl transition-all duration-300 group">
                                <span className="material-symbols-outlined font-light text-2xl group-hover:scale-110 transition-transform">chat</span>
                                <span className="text-xs font-bold uppercase letter-spacing-premium">WhatsApp Helpdesk</span>
                            </button>
                            <div className="hidden md:block w-px h-10 bg-gray-200 self-center"></div>
                            <button className="flex-1 flex items-center justify-center gap-4 py-5 px-6 text-slate-700 hover:bg-slate-700 hover:text-white rounded-xl transition-all duration-300 group">
                                <span className="material-symbols-outlined font-light text-2xl group-hover:scale-110 transition-transform">alternate_email</span>
                                <span className="text-xs font-bold uppercase letter-spacing-premium">Email Inquiry</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white dark:bg-background-dark">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => toggleFaq(0)}
                            >
                                <span className="font-bold text-lg dark:text-gray-200">Do I need an appointment for a visit?</span>
                                <span className={`material-symbols-outlined transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            {openFaq === 0 && (
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 animate-fade-in">
                                    While walk-ins are welcome during office hours, we recommend booking an appointment for detailed course counseling to ensure a dedicated trainer is available to assist you.
                                </div>
                            )}
                        </div>
                        <div className="border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => toggleFaq(1)}
                            >
                                <span className="font-bold text-lg dark:text-gray-200">How soon will I get a response after submitting the form?</span>
                                <span className={`material-symbols-outlined transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            {openFaq === 1 && (
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 animate-fade-in">
                                    Our team typically responds to all inquiries within 24 working hours. For urgent matters, please use the direct WhatsApp or Call options.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
