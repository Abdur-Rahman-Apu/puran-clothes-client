import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import google from '../../Assets/Google logo/google.svg'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { user, logIn, isLoading } = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/'


    const handleLogIn = data => {
        fetch(`http://localhost:5000/users?email=${data.email}&role=${data.userType}`)
            .then(res => res.json())
            .then(serverData => {
                if (serverData.isFound === 'Yes') {
                    logIn(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);

                            toast.success("Log in successfully")
                        })
                        .catch(error => {
                            toast.error(error.message)
                        })

                } else {
                    toast.error('User Type is not matched')
                }
            })
            .catch(error => {
                toast.error("User type is not matched")
            })






    }
    return (
        <div>
            <div className='flex justify-center my-10'>
                <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit(handleLogIn)} class="space-y-6" action="#">
                        <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Sign in to Puran Clothe</h5>
                        <div>
                            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            {/* input  */}
                            <input {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="abdur@gmail.com" />
                            {/* error  */}
                            {errors.email?.type === 'required' && <p className='text-red-400' role="alert">Email is required</p>}
                        </div>
                        <div>
                            <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input {...register("password", { required: { value: true, message: "Password is required" }, minLength: { value: 6, message: "Password must be 6 characters length" } })} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            {errors.password && <p className='text-red-400' role="alert">{errors.password.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User type</label>

                            <select {...register("userType", { required: true })} className="select select-bordered w-full max-w-xs">
                                <option value="User" >User</option>
                                <option value="Seller">Seller</option>
                            </select>

                            {errors.userType && <span className='text-red-400' role="alert">This field is required</span>}
                        </div>
                        <div class="flex items-start">
                            <button class=" text-sm text-orange-700 hover:underline dark:text-orange-500">Lost Password?</button>
                        </div>
                        <button type="submit" class="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/register" class="text-orange-700 hover:underline dark:text-orange-500">Create account</Link>
                        </div>
                    </form>

                    <div
                        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p class="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>

                    <button className='text-center w-full card flex-row h-11  bg-base-100 border shadow-lg justify-center items-center'>
                        <img className='h-7 mr-2' src={google} alt="google" />
                        Log in with google

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;