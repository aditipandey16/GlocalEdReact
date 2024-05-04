import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Blogs from "./pages/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/blogs",
        element: <Blogs />,
        errorElement: <Error />,
    },
]);