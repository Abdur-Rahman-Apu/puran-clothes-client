import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>

            <h1 className='text-3xl font-bold my-10 text-center text-orange-400'>Learn to crack interview</h1>


            <div className='w-3/4 mx-auto'>

                {/* question 1 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 1: </span> Difference between SQL and NoSQL</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>
                            <h1 className='text-xl font-bold'>SQL database:</h1>
                            <ul>
                                <li>SQL databases are known as Relational databases</li>
                                <li>It is an industry standard and very powerful language to execute complex queries</li>
                                <li>It is vertically scalable</li>
                                <li>It can extend their capacity on a single server by increasing their RAM, CPU or SSD.</li>
                                <li>It has a fixed schema</li>
                            </ul>
                        </p>
                        <p className='p-5'>
                            <h1 className='text-xl font-bold'>NoSQL database:</h1>
                            <ul>
                                <li>NoSQL databases are known as Non-Relational databases</li>
                                <li>The syntax can vary from database to database</li>
                                <li>It is vertically scalable</li>
                                <li>It has no pre-defined schema</li>
                                <li>It has a dynamic schema</li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* question 2 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 2: </span> What is JWT, and how does it work?</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>
                            The full form of JWT is Json Web Token. It is a way to transmit information securely between parties as a json object. JWT is written in json object. For securing API, JWT is very popular.

                            <p className='font-bold'>Working process:</p>

                            If the user log in with his/her credentials, the server creates access and refresh tokens and sends then to the client. These tokens are stores in the client side such as local storage, HTTP only cookie. The access token will be sent to the server. The server will take the first and second part of the token and decode the secret. If the output is matched then the information is correct. The access token will expire after a certain time. You will get another access token using the refresh token otherwise you have to log in
                        </p>
                    </div>
                </div>

                {/* question 3 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 3: </span> What is the difference between javascript and NodeJS?</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>
                            <h1 className='text-xl font-bold'>Javascript</h1>
                            <ul>
                                <li>
                                    Javascript is a programming language.
                                </li>
                                <li>
                                    Used for writing scripts on the website.
                                </li>
                                <li>
                                    It runs only in the browsers
                                </li>
                                <li>
                                    It is generally used on the client side.
                                </li>
                                <li>
                                    It can run in any browser engin
                                </li>
                            </ul>
                        </p>
                        <p className='p-5'>
                            <h1 className='text-xl font-bold'>Node Js</h1>
                            <ul>
                                <li>
                                    NodeJS  is a Javascript runtime.
                                </li>
                                <li>
                                    By using it, we can run Javascript outside of the browser.
                                </li>
                                <li>
                                    It has no capability to add HTML tags.
                                </li>
                                <li>
                                    It is generally used on the server side.
                                </li>
                                <li>
                                    V8 engine is present in the Node Js
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* question 4 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 4: </span> How does NodeJS handle multiple requests at the same time?</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>
                            Node JS is single threaded. The entire architecture of the Node Js is not single threaded. Its event loops are only single threaded. Node JS handle multiple client requests using EventQueue. By using the concept of the event driven architecture, Node JS is built. It has its own Event Loop. And it is an infinite loop that receives requests and process them. Event Loop is the listener for the event queue.
                        </p>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Blog;