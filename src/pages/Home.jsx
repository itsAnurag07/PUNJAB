import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedCourses from '../components/FeaturedCourses';
import About from '../components/About';
import HighlightsCarousel from '../components/HighlightsCarousel';
import NewsUpdates from '../components/NewsUpdates';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <FeaturedCourses />
            <About />
            <HighlightsCarousel />
            {/* <NewsUpdates /> */}
        </>
    );
};

export default Home;
