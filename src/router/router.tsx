import { createBrowserRouter } from "react-router";
import App from "../App";
import NewPage from "../page/NewPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/:id",
        element: <NewPage />,
    }
]);
