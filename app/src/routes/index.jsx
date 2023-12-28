// import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import About from '../components/About';
import Layout from '../layout'
import Home from '../components/Home'
export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                <Layout/>
            ),
            children: [
                { path:"", element: <Home/>},
                {path:"about",element:<About/>}
            ]
        },
    ]);

    return routes;
}