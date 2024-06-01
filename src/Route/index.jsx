import Layout from "../components/layout";
import Home from "../pages/Home";

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
            }
        ]


    }



]
