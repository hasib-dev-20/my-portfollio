import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Rootlayout,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    }
]);