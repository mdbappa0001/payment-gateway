import React from 'react';
import banner from "../../images/banner.jpg"

const ProductBanner = () => {
    return (
        <div>
            <div>
                    <div className='h-full flex flex-col absolute top-0 left-0 lg:mt-[550px] ml-10 mt-56 lg:ml-72'>
                        <a href="#contact">
                            <button className='btn bg-[#1f2937] text-white hover:bg-[#D5E5E4] hover:text-black'>Let Get Started Us</button>
                        </a>
                    </div>
                    <img src={banner} className="w-full" alt='' />
            </div>
        </div>
    );
};

export default ProductBanner;