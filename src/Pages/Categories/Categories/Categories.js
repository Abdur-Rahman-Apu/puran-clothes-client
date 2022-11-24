import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Loading/Loading';
import Category from '../Category/Category';

const Categories = () => {

    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const result = await fetch(`http://localhost:5000/categories`)
            const data = await result.json()
            return data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="title">
                <h1 className='text-3xl font-bold my-10 mx-7'>Categories</h1>
            </div>

            <div className='grid sm:grid-cols-1 gap-3 md:grid-cols-3 mx-8 my-10'>
                {
                    categories.map(category => <Category key={category.categoryId} category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;