import { Suspense, lazy } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import Layout from '../layout'

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
            ]
        },
    ]);

    return routes;
}