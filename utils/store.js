import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// const 

const store=configureStore({
    reducer:{
        cart:cartSlice,
    }
});

export default store;
//create store
//   -  configureStore({})-RTKReduxToolkit 
//      <Provider store={store_name_import}></>

// createSlice({
//   name:"",
//   intialStates:{
//   },
//   reducers:{
//     actionname:(state,action)=>{ //logic , here not need to return anything }
//   }
// })
//
// export const{} =slice_name.actions
// export default slice_name.reducer


// put that slice into  our store
//  - {
//  reducer{
//    name_of_slice:imported_named_slice_object }  
// }




