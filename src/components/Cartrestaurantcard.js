import { useDispatch, useSelector } from "react-redux"
import {IMG_CDN_URL} from "../constants.js"
import{removeItem} from "../../utils/cartSlice"


const Cartrestaurantcard = ({id,cloudinaryImageId,name,cuisines,avgRating, user})=>{
        
    const dispatch=useDispatch();
    // const cartIt=useSelector(store=>store.cart.items);
const handleRemoveItem=()=>{
//    console.log(cartIt)
    dispatch(removeItem({id,cloudinaryImageId,name,cuisines,avgRating, user}));
}
    return(

        <div className="p-2 m-2 box-border rounded-lg shadow-2xl shadow-black-800 w-72 flex flex-col" >
            <div class="w-full overflow-hidden">
            <img src={IMG_CDN_URL+cloudinaryImageId} className="box-border m-2 w-10/12 s border border-spacing-1 rounded-lg"/>
            </div>
            <h2 className="text-2xl mt-2 font-bold">{name}</h2>
            <h5 className="text-lg mt-1">{cuisines.join(", ")}</h5>
            <div>
                <div></div>
                <h4 className="text-md mt-1">{avgRating} stars</h4>
            </div>
            <button className="text-black text-xl bg-slate-400 m-2 p-2 ml-0  rounded-lg"  onClick={
                (e)=>{
                    // console.log(e);
                    handleRemoveItem({id,cloudinaryImageId,name,cuisines,avgRating, user})
                }
                }>Remove</button>
        </div>
        
    );
}

export default Cartrestaurantcard;
