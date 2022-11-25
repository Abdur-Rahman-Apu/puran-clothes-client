import React from 'react';
import { Link } from 'react-router-dom'
import google from '../../Assets/Google logo/google.svg'

const Login = () => {
    return (
        <div>
            <div className='flex justify-center my-10'>
                <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form class="space-y-6" action="#">
                        <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Sign in to Puran Clothe</h5>
                        <div>
                            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>

                        <div>
                            <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User type</label>

                            <select name="user" className="select select-bordered w-full max-w-xs">
                                <option value="User" defaultChecked>User</option>
                                <option value="Seller">Seller</option>
                            </select>
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