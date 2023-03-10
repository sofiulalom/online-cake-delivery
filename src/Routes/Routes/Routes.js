import {createBrowserRouter} from 'react-router-dom'
import Main from '../../LeyOut/Maine/Main'
import Blog from '../../pages/Home/Blog/Blog'
import CartService from '../../pages/Home/home/cartservices/CartService'

import Home from '../../pages/Home/home/Home'
import Orders from '../../pages/Home/Orders/Orders'

import ReviewCart from '../../pages/Home/Review/ReviewCart'
import ServiceAll from '../../pages/Home/Services/ServiceAll'
import ChackOut from '../../pages/shared/ChackOut/ChackOut'
import SignIn from '../../pages/shared/SignIn/SignIn'
import SignUp from '../../pages/shared/SignUp/SignUp'
import PrivetRoute from '../privateRoute/PrivetRoute'
export const routes=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/seeall',
                element: <ServiceAll></ServiceAll>
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            {
                path:'/myreview',
                element: <ReviewCart></ReviewCart>,
                
             
            },
            {
                path:'/cartService/:id',
                element: <CartService></CartService>,
                loader: ({params}) => fetch(`https://cake-service-server.vercel.app/services/${params.id}`)

            },
            {
               path:'/chackOut/:id',
               element: <PrivetRoute><ChackOut></ChackOut></PrivetRoute>,
               loader: ({params})=> fetch(`https://cake-service-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/orders',
                element: <PrivetRoute><Orders></Orders></PrivetRoute>,
            }

        ]
    }
])