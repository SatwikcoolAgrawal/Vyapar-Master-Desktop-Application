import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from '../layout'
import Loading from '../loading'
const About = lazy(()=>import('../pages/About')) ;
const Dashboard = lazy(()=>import('../pages/Dashboard')) ;
const Settings = lazy(()=>import('../pages/Settings')) ;
const User =  lazy(()=>import('../pages/User'));
const Form = lazy(()=>import('../pages/Form'));
const Analytics =lazy(()=>import('../pages/Analytics'));
const History =lazy(()=>import('../pages/History'));

export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                <Suspense fallback={<Loading/>}>
                <Layout/>
                </Suspense>
            ),
            children: [
                {path:"",element: <Dashboard/>},
                {path:"about",element:<About/>},
                {path:"user",element:<User/>},
                {path:"settings",element:<Settings/>},
                {path:"form",element:<Form/>},
                {path:"dashboard",element:<Dashboard/>},
                {path:"analytics",element:<Analytics/>},
                {path:"history",element:<History/>},
            ]
        },
    ]);

    return routes;
}