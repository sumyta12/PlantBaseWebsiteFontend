import React from 'react';
import HeroSection from '../Component/Home/HeroSection'
import Footer from '../Component/Home/Footer'
import HeroAnotherPart from '../Component/Home/HeroAnotherPart'
import SomeProduct from '../Component/Home/SomeProduct'
import ReviewSection from '../Component/Home/ReviewSection'

const HomePage = () => {
    return (
        <div>
        <HeroSection />
        <HeroAnotherPart />
        <SomeProduct />
        <ReviewSection />
        <Footer />
        </div>
    );
};

export default HomePage;