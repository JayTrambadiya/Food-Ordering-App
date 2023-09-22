import {React,lazy,Suspense, useState} from "react"
import ReactDOM from "react-dom/client"

//Default import
import Header  from "./components/Header"
import Body  from "./components/Body"
import Footer  from "./components/Footer"

// import About  from "./components/About"


//Dynamic import
//Dynamic bundling
//on Demand Loading
// lazy loading
// chunking
// code spliting
const About = lazy(()=>import("./components/About"))

//upon On Demand Loading -> upon render -> Suspend loading
// here we are using Suspense from "react" to not render page untill it has not been loaded


import Cart from "./components/Cart"
import Error  from "./components/Error"
import Contact from "./components/Contact"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import RestaurantMenu from "./RestaurantMenu"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Instamart from "./components/Instamart"
import ShimmerCard from "./components/ShimmerCard.js"
import { Provider } from "react-redux"
import store from "../utils/store"
// import ShimmerCard from "./components/ShimmerCard"

const root=ReactDOM.createRoot(document.getElementById("root"));

    
const Applayout=()=>{
const [user ,setUser]=useState({
    user:{
        name:"jay r t",
        email:"jaytrambadiya22@yahoo.com"
    }
})


    return (
            <Provider store={store}> 
            <Header/>
            <Outlet/>
            <Footer/>
            </Provider>
        );
    };




const appRouter =createBrowserRouter([{
        path:"/",
        element:<Applayout/>,
        // errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                // errorElement:<Error error={"45"}/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<ShimmerCard/>}><About/></Suspense>,
                // errorElement:<Error error={"45"}/>
            },
            {
                path:"/contact",
                element:<Contact/>,
                // errorElement:<Error error={"45"}/>
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },{
                path:"/profile",
                element:<Profile  name={""} id={"cp"} />
            },{
                path:"/instamart",
                element:<Instamart/>
            },{
                path:"/cart",
                element:<Cart/>
            }
        ]
        
    },{
        path:"/Login",
        element:<Login/>
    }
]);
    
    
    
root.render(
<RouterProvider router={appRouter}/>
);










// Header
//         -logo
//         -Nav-items
//         -cart
// Body 
//    -search Bar
//    - restrauntlist
//                 -Image
//                 -Named
//                 -Rating
//                 -Cusines
// Footer
//     -links
//     -Copyright








// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Named import -- if want to import particular element in js

// import {Title} from "./Header"
// console.log(<Title/>);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import * as obj from "./Header.js"
// now one can use it like obj.Title or obj.properities
