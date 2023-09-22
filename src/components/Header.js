import Logo from "../../assets/img/3903248.jpg"
import {useNavigate, Link, Route } from "react-router-dom";
import { useState } from "react";
import useOnline from "../../utils/useOnline";
// import  {useSelector} from "react-redux"
import store from "../../utils/store.js"
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/cartSlice";
// import onlineLogo from "../../assets/img/online2.jpg"
// import offlineLogo from "../../assets/img/offline2.jpg"


export const Title=()=>(
    <div>
        <a href="/"><img src={Logo} alt="logo" class="w-32 m-8 rounded-full" /></a>
    </div>
        );
        
    const Header=()=>{
        // const btn=useNavigate();
        const [logedin,setlogedin]=useState(false);
        const isOnline=useOnline();
        // console.log(isOnline);

        //from store --> cart--->items which we want to subscribe

        const cartItems=useSelector(store=>store.cart.items);
        // const dispatch=useDispatch();
        // dispatch(addItem());
            // useSelector


        return(

            <div class="h-32 flex flex-wrap flex-row box-border shadow-md shadow-slate-200   border-black	 text-2xl " >
                <Title className=""/>
                <div className="nav-items items-center flex">
                    <ul class="flex space-x-10">
                        <li className=""><Link to="/">Home</Link></li>
                        <li className="items-center"><Link to="/about">About us</Link></li>
                        <li className="items-center"><Link to="/contact">Contact</Link></li>
                        <li className="items-center"><Link to="/instamart">Instamart</Link></li>
                        <li className="items-center"><Link to="/cart">Cart-<span className="ml-1 text-md">{cartItems.length}</span></Link></li>
                        {
                            (!logedin?<li className="items-center"><Link to="/login"><button className="login" onClick={()=>{
                                setlogedin(true)
                            }}>Login</button></Link>
                            {/* <button className="login"  onClick={()=>btn("/login")} name="Login">Login</button> */}</li>:null)
                        }
                        {
                        <div className="items-center bg-black">
                            {/* <img src={onlineLogo} className="w-28 bg-black"></img> */}
                        </div>
                        }
                    </ul>
                    
                </div>
            </div>
        );
    };
    
export default Header