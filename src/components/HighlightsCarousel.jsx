import React from 'react';

const HighlightsCarousel = () => {
    return (
        <section className="bg-cream-accent dark:bg-background-dark py-24 px-10">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-4xl font-black mb-12">Our Expertise</h3>
                <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide">
                    {/* Card 1 */}
                    <div className="min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden group">
                        <img alt="Old Lahore" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Traditional street scene in old Lahore" src="src/assets/AZxQ8lEbEil_naboxjCE-A-AZxQ8lEbmz9Ea31weDGDKw.jpg" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                            <h4 className="text-white text-2xl font-bold">24/7 Support Available for Students</h4>
                            {/* <p className="text-white/80">Explore the rich  architecture.</p> */}
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden group">
                        <img alt="Rural Punjab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Lush green fields of rural Punjab" src="src/assets/AZxQ5fDZWB7wWqlNpeajFw-AZxQ5fDZIVrt_UAMzJM6hg (1).jpg" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                            <h4 className="text-white text-2xl font-bold">Trained & Qualified Instructors</h4>
                            {/* <p className="text-white/80">Discover ancient geological wonders.</p> */}
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden group">
                        <img alt="Modern Hubs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern high-tech vocational training lab" src="src/assets/AZxQ9B6GIvwCFKf-U85hUQ-AZxQ9B6GcsQbbcD0MYbEHQ.jpg" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                            <h4 className="text-white text-2xl font-bold">Government Approved Institute</h4>
                            {/* <p className="text-white/80">Adventure awaits in the golden dunes.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightsCarousel;
