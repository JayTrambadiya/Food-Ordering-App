import React from "react";
import { useSelector } from "react-redux";
import store from "../../utils/store";
import Restaurantcard from "./Restaurantcard";
import { clearCart } from "../../utils/cartSlice";
import Cartrestaurantcard from "./Cartrestaurantcard";
import Emptycart  from "./Emptycart";
const Cart=()=>{
const items= useSelector(store=>store.cart.items)
// console.log(items)

    return  items.length>0?(<>

            <div className="flex flex-row flex-wrap">
              {
                items?.map((res)=>{
                    // console.log(res.name);
                    return <Cartrestaurantcard {...res}/>
                })
             }
            </div>
    </>
  ):<Emptycart/>
}
export default Cart;