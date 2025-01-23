import { lazy } from "react";
const Admin = lazy(() => import("../pages/guest/registration/admin"));
const Customer = lazy(() => import("../pages/guest/registration/customer"));
const Login = lazy(() => import("../pages/guest/login/login"));
const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));



export const RouteList = [
    {
        path: "/",
        component: Admin,
        allowWithoutLogin: true,
        name: "admin_registration",
    },
    {
        path: "/admin_registration",
        component: Admin,
        allowWithoutLogin: true,
        name: "admin_registration",
    },
    {
        path: "/customer_registration",
        component: Customer,
        allowWithoutLogin: true,
        name: "customer",
    },
    {
        path: "/login",
        component: Login,
        allowWithoutLogin: true,
        name: "login",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        allowWithoutLogin: true,
        name: "dashboard",
    },

]