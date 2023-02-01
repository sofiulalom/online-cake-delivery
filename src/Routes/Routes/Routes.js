import {createBrowserRouter} from 'react-router-dom'
import Main from '../../LeyOut/Maine/Main'
import Home from '../../pages/Home/home/Home'
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
            }
        ]
    }
])