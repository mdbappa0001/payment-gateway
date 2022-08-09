import React from 'react';

const Product = ({ product, setPurchase }) => {
    const { name, price, img } = product;
    return (
        <div className="card lg:max-w-lg shadow-xl hover:bg-blue">
            <div className="card-body">
                <img className='w-40 lg:w-28 lg:ml-32 ml-16' src={img} alt="" />
                <h2 className="text-xl font-bold text-center">Name : <span className='text-secondary'>{name}</span></h2>
                <h2 className="text-xl font-bold text-center">Price : <span className='text-secondary'>${price}</span></h2>
                <div className='card-actions justify-center'>
                    <label
                        onClick={() => setPurchase(product)}
                        for="booking-modal"
                        className="btn btn-sm w-full btn-primary lg:mt-4 ml-16 mr-16  hover:btn-success">Buy Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;