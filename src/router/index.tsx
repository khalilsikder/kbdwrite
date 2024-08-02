import MainLayouts from "@/components/layouts/MainLayouts";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/checkOut/Checkout";
import ContractUs from "@/pages/ContractUs/ContractUs";
import ProductList from "@/pages/Dashboard/ProductList";
import DetailsProduct from "@/pages/DetailsProduct/DetailsProduct";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import NotFound from "@/pages/shared/NotFound";
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
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            },
            {
                path:'detailsproduct',
                element:<DetailsProduct></DetailsProduct>  
            },
            {
             path:'cart',
             element:<Cart></Cart>
            },
            {
                path:'checkout',
                element:<Checkout></Checkout>
            },
            
        ]
    }
])

export default router;