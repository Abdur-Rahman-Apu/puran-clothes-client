import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Loading/Loading';

const AllSeller = () => {

    // react query  (2) 
    const { isLoading, data: sellers = [] } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/allSellers')
            const data = result.json()
            return data
        }

    })

    if (isLoading) return <Loading></Loading>
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>All seller</h1>
            <p>Sellers length: {sellers.length}</p>
            <div>

            </div>
        </div>
    );
};

export default AllSeller;