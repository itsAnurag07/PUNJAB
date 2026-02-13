import React from 'react';

const NewsUpdates = () => {
    return (
        <section className="py-24 px-10 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl font-black mb-12 border-l-8 border-primary pl-6">Latest News & Updates</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* News 1 */}
                    <article className="group">
                        <div className="h-48 rounded-lg overflow-hidden mb-4">
                            <img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Newspaper and digital tablet showing news" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPxUANiZRyQMq5KLWVDvQaOov0xITEoQPE_V6aVILHNDDebqwUft1Zki4ghCk6WrIqrN58QcLXXbTR1Z0i0-Z8ZrdkyCFvsxgwD-V28W8dvL9q2gTrLuCoRTaC4RRWDiUsFJphwpNaIcPTMz9Hgt8iZ48ya3_oRFMv3_XUpTTjBGOXCafsayimb_WJikLAmscU7WhX-AqnsqrguvZ_StEpcwEC3ZI02bbJyZh1iDMPbXTTyzutUHaLyGqHwamtup7b1N26p70uw0" />
                        </div>
                        <time className="text-primary font-bold text-sm">October 24, 2023</time>
                        <h5 className="text-xl font-bold my-2 group-hover:text-primary">JIDT Announces New Batch for HMV Training</h5>
                        <p className="text-slate-500 text-sm leading-relaxed">Admissions are now open for the upcoming professional driver training session starting next month...</p>
                    </article>
                    {/* News 2 */}
                    <article className="group">
                        <div className="h-48 rounded-lg overflow-hidden mb-4">
                            <img alt="Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Corporate meeting in progress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCgEqvZIp9oJXF6f5ntaTL5MSj2OYT8lZgFPHCslaGgyyh8iDg9qfKTFz-PMuO2TEL3KQUa0NVy7dsQORinemfIh_56xfB8nY7JSpVEKOuZvdc3IIQx9fyLHoqOkZDNSg_njWF3Clf2az_v8A-vDOh6naoNCHDf9uP3qXkwDLzG-jubj5W5OroSjArj8AAfH4zPzLf5EMcy5XwomYO_jhtT2Uk3PYQvuw4WVxCd0pnbeFzTDFkcYlUmuk1bxuLz-yaEBq1thqdQPA" />
                        </div>
                        <time className="text-primary font-bold text-sm">October 18, 2023</time>
                        <h5 className="text-xl font-bold my-2 group-hover:text-primary">New Logistics Partnership Signed</h5>
                        <p className="text-slate-500 text-sm leading-relaxed">A strategic partnership has been formed to provide placement opportunities for our trainees in major transport firms...</p>
                    </article>
                    {/* News 3 */}
                    <article className="group">
                        <div className="h-48 rounded-lg overflow-hidden mb-4">
                            <img alt="Graduation" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="People receiving certificates at a graduation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi7tHh53W2-LCC_lbQ89hvyE_htLEC2_FuUTYEGVAQ20wQEdPuJMwi51Lk7WLSbkmAsnjeZGc6j78wfLNZWZoU1F8gpO2hW1TyVNPwo5ClSE7jEzgL4PeGkl7HN1EgceAIBo84mAQ-Mf_e2zUfAbHnEbipR58t9HlFQQzbWMeXa5h7sxNX0AEz_TFcW43Fedih3TtmLkr8ofHgUB3eW_pet_wcGroO_mDI7UszarI2wSvFNWapL0WvfZRJ_LgmATYpfAeu6KEpGlI" />
                        </div>
                        <time className="text-primary font-bold text-sm">October 12, 2023</time>
                        <h5 className="text-xl font-bold my-2 group-hover:text-primary">Convocation Held for HMV Drivers</h5>
                        <p className="text-slate-500 text-sm leading-relaxed">Over 500 trainees received their international heavy vehicle certifications this month...</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default NewsUpdates;
