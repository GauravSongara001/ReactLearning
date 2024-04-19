import { createBrowserRouter } from "react-router-dom";
import UserList from "./components/UserList";
import Register from "./components/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><UserList /></>
    },
    {
        path: "/register",
        element: <><Register /></>
    }
])

export default router