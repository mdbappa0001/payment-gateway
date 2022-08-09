import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OpenModal from './OpenModal';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [purchase, setPurchase] = useState(null);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 lg:mb-24 ml-8 mr-8 mt-12'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                    setPurchase={setPurchase}
                ></Product>)
            }
        </div>
        {purchase && <OpenModal 
        purchase={purchase}
        setPurchase={setPurchase}
        ></OpenModal>}
    </div>
    );
};

export default Products;