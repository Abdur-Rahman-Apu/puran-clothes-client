import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, setClothe }) => {
    console.log(product);
    const { productName, productImage, location, originalPrice, resalePrice, postTime, sellerName, verified, yearsOfUse } = product;





    // format date 
    // const options = {

    //     year: 'numeric',
    //     month: 'short',
    //     day: 'numeric'
    // };

    // const postedTime = postTime.toLocaleDateString('en-us', options)
    // console.log(postTime.toLocaleDateString('en-us', options));

    return (

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

            <img class="p-8 rounded-t-lg" src={productImage} alt="product" />

            <div class="px-5 pb-5">

                <div className='flex justify-between items-center'>

                    <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>

                    <p class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{postTime}</p>
                </div>

                <div class="my-4  pb-5">

                    <p>
                        <span className='font-bold mr-3'>{sellerName}</span>
                        {
                            verified ? <FontAwesomeIcon className='text-blue-400' icon={faCheckCircle} /> : ''
                        }
                    </p>

                    <p >
                        <FontAwesomeIcon className='text-blue-400 mr-3' icon={faLocationDot} />

                        <span>{location}</span>
                    </p>

                </div>


                <div class="my-4  pb-5 flex justify-between items-center">
                    <p>Original price: <span className='font-bold'>${originalPrice}</span></p>

                    <p>Years of use: <span className='font-bold'>{yearsOfUse}</span></p>
                </div>

                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${resalePrice}</span>
                    <label htmlFor='my-modal-3' onClick={() => setClothe(product)} class=" btn border-0 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-blue-500 dark:focus:ring-orange-600">Book Now</label>
                </div>
            </div>
        </div>

    );
};

export default Product;