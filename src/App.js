import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Body from "./components/Body";
import '../index.css';
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
const AppLayout = () => {
    return (
        <div className="app">
         <Header />
         <Outlet />
         <Footer />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children: [
        {
            path:"/",
            element:<Body />,
        },
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/contact",
            element:<Contact />,
        },
        {
            path:"/restaurant/:id",
            element:<ResMenu />,
        }
      ],
      errorElement:<Error />
    }
])

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);