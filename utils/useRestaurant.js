//customize hook


import {useEffect,useState} from "react";
import {RESTAURANT_DATA} from "../src/constants"
const useRestaurant= ()=>{
    const [allResList,setAllResList]=useState([]);

    // console.log("")
    async function getRestraurantList(){

        // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2156354&lng=72.63694149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data=RESTAURANT_DATA;
        // const json= await data.json()
        const json=RESTAURANT_DATA;
        // setresList(json?.data?.cards[2]?.card?.card?gridElements?.infoWithStyle);
        // console.log(json?.data)
        const dt=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(json)
        
        if(dt)
        {
            setAllResList(dt)
        }
    
    }

    

// it will call an callback function whenever page load or says component rerender
// in react each time any change will rerender so 
// every time this useEffecct will call its function
useEffect(()=>{
    getRestraurantList();
},[])
// console.log("this is useEffect in body");
// console.log(allResList);
    return [allResList,setAllResList];
}

export default useRestaurant;


