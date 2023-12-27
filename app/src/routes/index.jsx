import { Suspense, lazy } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import Layout from '../layout'
import {Home} from '../pages'
export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                <Layout>
                    <Outlet />
                </Layout>
            ),
            children: [
                { element: <Navigate to="/" />, index: true },
                {path:'home',element:<Home/>}
            ]
        },
    ]);

    return routes;
}