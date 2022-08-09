import React from 'react';

const Product = ({ product, setPurchase }) => {
    const { price, img } = product;
    return (
        <div className="card lg:max-w-lg shadow-xl hover:bg-blue hover:bg-[#D1AB71]">
            <div className="card-body">
                <img className='w-40 lg:w-36 lg:ml-32 ml-16' src={img} alt="" />
                <h2 className="text-xl font-bold text-center">Price : <span className='text-red-700'>${price}</span></h2>
                <div className='card-actions justify-center'>
                    <label
                        onClick={() => setPurchase(product)}
                        for="booking-modal"
                        className="btn btn-sm btn-primary lg:mt-4 w-28 hover:btn-success">Buy Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;