// import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import About from '../components/About';
import Layout from '../layout'
import Home from '../components/Home.jsx'
import Settings from '../pages/Settings';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User';
import Form from '../pages/Form';
import Analytics from '../pages/Analytics';
import Search from '../pages/Search';

export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                <Layout/>
            ),
            children: [
                {path:"", element: <Home/>},
                {path:"about",element:<About/>},
                {path:"user",element:<User/>},
                {path:"settings",element:<Settings/>},
                {path:"form",element:<Form/>},
                {path:"dashboard",element:<Dashboard/>},
                {path:"analytics",element:<Analytics/>},
                {path:"search",element:<Search/>},
            ]
        },
    ]);

    return routes;
}