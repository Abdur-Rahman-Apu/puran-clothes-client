import React from 'react';
import { useLoader } from 'react-router-dom'

const Products = () => {
    const data = useLoader()
    console.log(data);
    return (
        <div>
            <h1>product</h1>
        </div>
    );
};

export default Products;