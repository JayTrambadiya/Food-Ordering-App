import React from "react";
import ReactDOM from "react-dom/client";

// const Header=({title,name})=>{
// return (
//     <>
//     <div>{title}</div>
//     <div style={{}}>{name}</div>      
//       </>
// );
// }
// Destructuring the object


const Header= (props)=>{
    // console.log("jay is here");
    // console.log(props);
    // let s={};
    // s=props.style;
    // console.log(s);
    return (
        <>
        <div>{props.title}</div>
        <div style={{}}>{props.name}</div>      
          </>
    );
}

// console.log(header({title:"title",name:"naam",style:"border 2px solid red"}));
const Whole_dom =()=>{
    return (
        <>
    <Header title="Properties" style='border:"1px solid red"' name="Jay has created"/>
    <footer/>
    </>
    );
}

const footer= ()=>{
    return (
        <></>
        // <React.Fragment></React.Fragment>
        // for not a single parent in JSX
    );
}

const root=ReactDOM.createRoot(document.querySelector(".container"));
// console.log(root);
root.render(<Whole_dom/>);