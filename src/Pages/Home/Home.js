import React from 'react';
import Footer from '../../Components/Footer';
import ProductBanner from './ProductBanner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <ProductBanner></ProductBanner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;