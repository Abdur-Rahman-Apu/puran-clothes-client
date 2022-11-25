import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layouts/Main"
import Categories from "../../Pages/Categories/Categories/Categories"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Products from "../../Pages/Products/Products"
import Register from "../../Pages/Register/Register"
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes"

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><Products></Products>,</PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
            },

        ]
    }
])