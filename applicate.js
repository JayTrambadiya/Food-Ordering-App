import React  from "react";
import ReactDOM from "react-dom/client";
// react element
const header =( 
    //jsx just look like html
    <h1>i am header as ReactElement, will be used in anywhere 
    </h1>
);


// function component in React


// component inside component is aka as "composite component"
//parsing component inside component


const Man = ()=>(
    <div>
        <Ram/>
           {header}
            <div key="opposite">Jay Shree Ram</div>
        </div>
        );
        
        
        const Ram=()=>{
            return(
                <h1 className="God">Hey Ram!!!</h1>
            );
        };


const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render([Ram(),Man()]);
root.render(<Man/>);


