import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Products from './Product/Products';
import Teams from './Teams/Teams';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Teams></Teams>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;