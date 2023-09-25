import {
    createBrowserRouter
} from "react-router-dom";

import Root from './pages/root.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'


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
        }]
}]);

export default router;