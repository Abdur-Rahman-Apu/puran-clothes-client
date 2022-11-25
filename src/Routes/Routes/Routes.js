import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout"
import Main from "../../Layouts/Main"
import Categories from "../../Pages/Categories/Categories/Categories"
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer"
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller"
import Myorders from "../../Pages/DashBoard/Buyer/Myorders"
import Dashboard from "../../Pages/DashBoard/DashBoard/Dashboard"
import AddProduct from "../../Pages/DashBoard/Seller/AddProduct/AddProduct"
import MyProduct from "../../Pages/DashBoard/Seller/MyProduct/MyProduct"
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>

            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>

            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>

            },
            {
                path: '/dashboard/myorders',
                element: <Myorders></Myorders>

            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>

            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>

            },

        ]
    }
])