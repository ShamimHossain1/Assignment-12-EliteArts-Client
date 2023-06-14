import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Page/Login/Login";
//import SignUp from "../Page/signUp/signUp";
import ClassesPage from "../Page/ClassesPage/ClassesPage";
import Dashboard from "../Page/DashBoard/Dashboard";
import Course from "../Page/DashBoard/Course/Course";
import Add from "../Page/DashBoard/Add";
import MyCart from "../Page/DashBoard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Page/DashBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Payment from "../Page/DashBoard/Payment/Payment";
import Instructors from "../Page/Instructors/Instructors";
import SignUp from "../Page/SignUp/SignUp";
import InsRoute from "./InsRoute";
import HomeLayouts from "../Layouts/HomeLayouts";
import History from "../Page/DashBoard/History";
import Enrolled from "../Page/DashBoard/Enrolled";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import MyClass from "../Page/DashBoard/MyClass/MyClass";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            ,
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'course',
                element: <ClassesPage></ClassesPage>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: 'home',
        element: <HomeLayouts></HomeLayouts>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'courseManage',
                element: <AdminRoute><Course></Course></AdminRoute>
            },
            {
                path: 'add',
                element: <InsRoute><Add></Add></InsRoute>
            },
            {
                path: 'cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'history',
                element: <History></History>
            },
            {
                path: 'enrolled',
                element: <Enrolled></Enrolled>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            }
        
        ]
    }
])