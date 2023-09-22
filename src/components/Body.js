import Restaurantcard from "../components/Restaurantcard.js"
import {useEffect, useState,useContext} from "react"
import ShimmerCard from "../components/ShimmerCard.js"
import filterData from "../../utils/filterData.js"
import useRestaurant from "../../utils/useRestaurant.js"
import UserContext from "../../utils/UserContext.js"
import { Link } from "react-router-dom"
import { RESTAURANT_DATA } from "../constants.js"
const Body = ()=>{
    
    // console.log(" by the way i am your body ")


    //local state variable for creating or storing state variable 
    //hooks ==>> normal js function 
    //usestate() ===>> provide array and ,method to override its value
    // what is state
    const {user}=useContext(UserContext);4
    const [allResList]=useRestaurant();
    const [filterResList,setFilterResList]=useRestaurant();
    const [searchText,setSearchText]= useState();



// but if we dont need to this then we can pass dependencies
// if [] ==null then one time it will call  at time of first loading



    // if(!allResList)return null;

    // if(filterResList?.length ===0 )
    //  return <h2>No Restaurant match your Filter!!</h2>

    return(
        <>
        <div className="search-container p-5 m-5 bg-slate-200 rounded-xl ">
            <input type="text"   className="p-3 rounded-xl" placeholder="Search" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
            }}/>

            <button className="ml-5 p-3 bg-slate-500 text-white rounded-2xl" onClick={()=>{
                    const data=filterData(searchText,allResList)
                    if(data){
                        setFilterResList(data);
                    }
                  }
                }>Search</button>
        </div>
        
        <div>
            {/* {console.log("hiii this is "+RESTAURANT_DATA)} */}
            <div className="res-list grid grid-cols-5 space-x-5 py-5 ">  
                {
                       filterResList?.map((res,index)=>{
                        return <Link to={"/restaurant/"+res.info.id} className=""><Restaurantcard {...res.info} user={user}/>
                        </Link>                        
                    })
                }
            </div>
        </div>

        </>        
       ); 


    };



export default Body