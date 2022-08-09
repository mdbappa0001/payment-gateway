import React from 'react';
import banner from "../../images/banner.jpg"

const ProductBanner = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full h-full  top-0 left-0 absolute opacity-70'></div>
                    <div className='w-full h-full flex flex-col absolute top-0 left-0 lg:mt-[400px] ml-12 mt-44 lg:ml-72'>
                        <a href="#contact">
                            <button className='btn bg-[#1f2937] text-white hover:bg-[#D5E5E4] hover:text-black'>Let Get Started Us</button>
                        </a>
                    </div>
                    <img src={banner} className="w-full" alt='' />
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;