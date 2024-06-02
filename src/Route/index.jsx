import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/aboutUs";

export const ROUTE = [

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },

            {
                path: "/home",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>
            }

        ]


    }



]
