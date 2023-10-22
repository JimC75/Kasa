import {
    createBrowserRouter
} from "react-router-dom";

import Root from './pages/root.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
import { Suspense } from "react";


const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "logement/:logementId",
            element: <Logement />,
        },
        {
            path: "/*",
            element: <NotFound />,
        }
    ]
}]);

export default router;