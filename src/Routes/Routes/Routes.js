import {createBrowserRouter} from 'react-router-dom'
import Main from '../../LeyOut/Maine/Main'
import ChackOut from '../../pages/Home/home/chackout/ChackOut'
import Home from '../../pages/Home/home/Home'
import Orders from '../../pages/Home/Orders/Orders'
import SignIn from '../../pages/shared/SignIn/SignIn'
import SignUp from '../../pages/shared/SignUp/SignUp'
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
               path:'/chackOut/:id',
               element: <ChackOut></ChackOut>,
               loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/orders',
                element: <Orders></Orders>,
            }

        ]
    }
])