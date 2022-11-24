import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layouts/Main"
import Categories from "../../Pages/Categories/Categories/Categories"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage"
import Home from "../../Pages/Home/Home/Home"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/categories',
                element: <Categories></Categories>,
                loader: ({ params }) => { fetch(`http://localhost:5000/category/${params.id}`) },
            },

        ]
    }
])