import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Upload from "./pages/Upload";
import Vote from "./pages/Vote";
import Error from "./pages/Error.jsx";
import "./index.css";
import Root from "./pages/Root.jsx";
import UploadSuccess from "./pages/UploadSuccess.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/upload/success",
        element: <UploadSuccess />,
      },
      {
        path: "/vote",
        element: <Vote />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
