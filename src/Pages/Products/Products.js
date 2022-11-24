import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import Product from './Product/Product';

const Products = () => {
    const products = useLoaderData()

    return (
        <div>
            <h1>Products</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-8 my-8'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;