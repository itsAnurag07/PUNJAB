import heroBg from '../assets/AZxRCbkIgwmhhyWM2vKH3A-AZxRCbkINSfyTzBvgdqWEg.jpg';



const Hero = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" data-alt="Professional heavy vehicle driver training facility" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[0px]"></div>
            <div className="relative z-10 text-center max-w-4xl px-4">
                <h2 className="text-white text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight uppercase">
                    Jalandhar Institute of Drivers Training
                </h2>
                <p className="text-white/90 text-xl lg:text-2xl font-light mb-10 max-w-2xl mx-auto italic">
                    Excellence in Professional Driver Training & Road Safety for a safer tomorrow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="/new-forms">
                        <button className="bg-primary hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all">
                            Register Now
                        </button>
                    </a>
                    <a href="/about">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                            About Institute
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
