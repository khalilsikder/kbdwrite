import MainLayouts from "@/components/layouts/MainLayouts";
import AboutUs from "@/pages/AboutUs/AboutUs";
import ContractUs from "@/pages/ContractUs/ContractUs";
import ProductList from "@/pages/Dashboard/ProductList";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        children:[
            {
        index:true,
        element:<Home></Home>
            },
            {
                path:'products',
                element:<Products></Products>,
            },
            {
                path:'aboutus',
                element:<AboutUs></AboutUs>,
            },
            {
                path:'contractus',
                element:<ContractUs></ContractUs>,
            },
            {
                path:'dashboard',
                element:<ProductList></ProductList>
                
            }
            
        ]
    }
])

export default router;