import ReactDom from "react-dom/client"
import { Outlet } from "react-router";
import Body from "./component/Body";
import Header from "./component/Header";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import * as style from "/index.css"
import Weather from "./component/Weather";



const App = () => {
    return (
        <div> 
            <Header/>
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/weather",
                element:<Weather/>
            }
        ]
    }
])


const root = ReactDom.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(<RouterProvider router={router} />);