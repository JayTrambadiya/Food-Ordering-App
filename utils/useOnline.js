import {React,useEffect,useState} from  "react"

// Custom Hooks 
//             are a mechanism to reuse stateful logic (such as setting up a subscription and remembering   -              the current value), but every time you use a custom Hook, all state and effects inside of it -              are fully isolated.
// -Each call to a Hook gets isolated state.
// -from React’s point of view our component just calls useState and useEffect

const useOnline=()=>{
    const [isOnline,setisOnline]=useState(true);
    
    useEffect(()=>{
        // console.log("i am useeffect ")
        function  handleOnline(){
            setisOnline(true);
        }

        function handleOffline(){
            setisOnline(false);
        }

        window.addEventListener("online",handleOnline);
        console.log(isOnline);
        window.addEventListener("offline",handleOffline);
        console.log(isOnline);

        return ()=>{
            // console.log("remove")
            window.removeEventListener("online",handleOnline),
            window.removeEventListener("offline",handleOffline)   
        }
    },[])
   
    return isOnline;
}

export default useOnline;