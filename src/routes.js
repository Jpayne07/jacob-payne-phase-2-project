import React from "react";
import BBQMenu from "./Pages/BBQMenu.js";
import SushiMenu from "./Pages/SushiMenu.js"
import ErrorPage from "./Pages/ErrorPage.js";
import Home from "./Pages/Home.js";

const routes = [
    {path:"/",
        element: <Home/>,
    errorElement: <ErrorPage/>
    },
    {
        path:"/bbqMenu",
        element: <BBQMenu />,
        errorElement: <ErrorPage/>
        
    },
    {
        path:"/sushiMenu",
        element:<SushiMenu />
    }
]

export default routes;