import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import BookModal from './BookModal/BookModal';
import Product from './Product/Product';

const Products = () => {
    const products = useLoaderData()

    const [clothe, setClothe] = useState(null)

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>Products</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-8 my-8'>
                {
                    products.map(product => <Product key={product._id} product={product} setClothe={setClothe}></Product>)
                }
            </div>

            <div>


                {
                    clothe && <BookModal product={clothe} setClothe={setClothe}></BookModal>
                }


            </div>
        </div>
    );
};

export default Products;