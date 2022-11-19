import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Dashboard/AllUsers";
import Dashboard from "../Dashboard/Dashboard";
import MyAppointments from "../Dashboard/MyAppointments";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/appointment',
                element: <Appointment />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments />
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            }
        ]
    }
])