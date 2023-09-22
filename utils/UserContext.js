import { createContext } from "react";
// 
// Context 
// -       is designed to share data that can be considered “global” for a tree of React components, such as -          the current authenticated user, theme, or preferred language.



const UserContext=createContext({
    user:{
        name:"Jay R T",
        email:"jaytrambadiya21@gmail.com"
    },
})
export default UserContext

// for creat