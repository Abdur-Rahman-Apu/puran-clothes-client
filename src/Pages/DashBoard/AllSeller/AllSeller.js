import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Loading/Loading';
import toast from 'react-hot-toast';

const AllSeller = () => {

    // react query  (2) 
    const { isLoading, data: sellers = [], refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/allSellers')
            const data = result.json()
            return data
        }

    })


    // delete seller 
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/allusers/${id}`, {
            method: 'PATCH',

        })
            .then(() => {
                toast.success("Deleted successfully")
                refetch()
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    if (isLoading) return <Loading></Loading>
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>All seller</h1>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    No
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                sellers.map((seller, index) => <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{seller.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {seller.email}

                                    </td>
                                    <td>{seller.phone}</td>
                                    <th>
                                        <button onClick={() => handleDelete(seller._id)} className="btn bg-red-400 border-0 btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;