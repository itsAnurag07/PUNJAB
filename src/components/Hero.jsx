import heroBg from '../assets/AZxRCbkIgwmhhyWM2vKH3A-AZxRCbkINSfyTzBvgdqWEg.jpg';



const Hero = () => {
    return (
        <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" data-alt="Professional heavy vehicle driver training facility" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[0px]"></div>
            <div className="relative z-10 text-center max-w-4xl px-4">
                <h2 className="text-white text-2xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight tracking-tight uppercase break-words">
                    Jalandhar Institute of Drivers Training
                </h2>
                <p className="text-white/90 text-sm md:text-xl lg:text-2xl font-light mb-8 md:mb-10 max-w-2xl mx-auto italic px-2">
                    Excellence in Professional Driver Training & Road Safety for a safer tomorrow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="/new-forms" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-primary hover:bg-red-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg shadow-xl transition-all">
                            Register Now
                        </button>
                    </a>
                    <a href="/about" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg transition-all">
                            About Institute
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
