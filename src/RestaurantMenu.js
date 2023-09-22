import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL } from "./constants";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    console.log(resId);
    useEffect(()=>{
            getRestaurantMenuInfo();
        },[])
        
        async function getRestaurantMenuInfo(){
            
            console.log(FETCH_MENU_URL+resId)
            const data =await fetch(FETCH_MENU_URL+resId);
            const json = await data.json();

            console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[6].card.card.itemCards[0].card.info)
        }


    return (
        <h1>Restaurant id :{resId}</h1>
    );
}
export default RestaurantMenu;