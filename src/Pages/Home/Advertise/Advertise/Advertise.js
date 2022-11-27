import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';

const Advertise = () => {

    const { user } = useContext(AuthContext)



    const { isLoading, refetch, data: advertisedProducts = [] } = useQuery({
        queryKey: ['myproduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allAdvertiseProducts`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('clotheToken')}`
                }
            })
            const data = res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    if (advertisedProducts.length) {
        return (
            <div>
                <h1 className='font-bold text-3xl my-5 px-10'>Advertise</h1>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
                    {
                        advertisedProducts.map((product, index) =>
                            <AdvertisedProduct key={index} product={product}></AdvertisedProduct>
                        )
                    }
                </div>
            </div>
        );
    }
};

export default Advertise;