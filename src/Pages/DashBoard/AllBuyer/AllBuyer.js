import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
import { useQuery } from '@tanstack/react-query'




const AllBuyer = () => {

    const { isLoading, removeUser } = useContext(AuthContext)

    const [buyers, setBuyers] = useState([])

    //Api call using axios (1)

    useEffect(() => {
        axios.get('http://localhost:5000/allBuyers')
            .then(res => {
                setBuyers(res.data)
            })
            .catch(error => {
                toast.error("Can not get data")
            })
    }, [])

    // delete seller 
    // const [allUsers, setAllUsers] = useState([])
    const handleDelete = (id) => {



        // const search = buyers.find(user => user._id === id)
        // console.log(search.user.uid);

        // console.log(user);
        // deleteUser(search.user)
        //     .then(() => { console.log("Success"); })
        //     .catch(error => console.log(error))
        // console.log(id);

        fetch(`http://localhost:5000/allusers/${id}`, {
            method: 'DELETE',

        })
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Deleted Successfully")
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }





    console.log(buyers);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>All buyers</h1>

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
                                buyers.map((buyer, index) => <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{buyer.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {buyer.email}

                                    </td>
                                    <td>{buyer.phone}</td>
                                    <th>
                                        <button onClick={() => handleDelete(buyer._id)} className="btn bg-red-400 border-0 btn-xs">Delete</button>
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

export default AllBuyer;