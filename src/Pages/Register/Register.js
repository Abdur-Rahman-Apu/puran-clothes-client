import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { user, createUser, updateUserProfile } = useContext(AuthContext)

    const imgHostKey = process.env.REACT_APP_imgKey;
    // console.log(imgHostKey);



    const handleRegister = data => {
        console.log(data);

        const image = data.img[0]

        const { name, email, password, userType } = data

        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);

                if (imgData.success) {
                    const registeredUser = {
                        name: name,
                        email: email,
                        image: imgData.data.url,
                        role: userType
                    }

                    createUser(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);

                            const profile = {
                                displayName: name,
                                photoURL: imgData.data.url,
                                role: userType
                            }

                            updateUserProfile(profile)
                                .then(() => {
                                    toast.success('User registered in successfully')
                                    fetch(`http://localhost:5000/users`, {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(registeredUser)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            console.log(data);
                                            toast.success(`Data is added successfully`)

                                        })
                                        .catch(error => {
                                            toast.error(error.message)
                                        })
                                })
                                .catch(error => {
                                    toast.error("User name and photo are not added")
                                })

                        })
                        .catch(error => {
                            toast.error(error.message)
                        })

                }
            })
    }
    return (
        <div>


            <div className='flex justify-center my-10'>
                <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-6" >
                        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">Register to Puran clothes</h5>

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>

                            <input {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your name" />
                            {errors.name?.type === 'required' && <p className='text-red-400' role="alert">Name is required</p>}
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Photo</label>

                            <input type='file' {...register("img", { required: true })} aria-invalid={errors.img ? "true" : "false"} className="input w-full " />

                            {errors.img?.type === 'required' && <p className='text-red-400' role="alert">Image is required</p>}
                        </div>
                        <div>
                            <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User type</label>

                            <select {...register("userType", { required: true })} className="select select-bordered w-full max-w-xs">
                                <option value="User" defaultChecked>User</option>
                                <option value="Seller">Seller</option>
                            </select>
                            {errors.userType && <span className='text-red-400' role="alert">This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>

                            <input {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                            {errors.email?.type === 'required' && <p className='text-red-400' role="alert">Email is required</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input {...register("password", { required: { value: true, message: "Password is required" }, minLength: { value: 6, message: "Password must be 6 characters length" } })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            {errors.password && <p className='text-red-400' role="alert">{errors.password.message}</p>}
                        </div>

                        <button type="submit" className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Register</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already have an account? <Link to="/login" className="text-orange-700 hover:underline dark:text-orange-500">Log in</Link>
                        </div>
                    </form>


                </div>
            </div>



        </div>
    );
};

export default Register;