import {React ,useContext,Component}from "react";
import UserContext  from "../../utils/UserContext";
// const About=()=>{
//     return(
//         <h1>This is About 
//             page
//         </h1>
//     );
// }
// 

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Ramjibhai",
        }
    }

    //single time called
    componentDidMount(){
        this.setState({name:"Jhu"});
        // this.setState(()=>);
    }

    //after every render
    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
        //   code if we dont compare then will run for infinite times
        }
      }
      
    render(){

        // const{user} =useContext(UserContext);
        return (
            <>

            {/* to use context in class we have to use ".consumer" instead of useContext Hook  */}
            
            <UserContext.Consumer>
                {
                    ({user})=>{
                        console.log(user.email)                        
                    }
                }
            </UserContext.Consumer>
            <h1>This is About 
            page{this.state.name}
        </h1>
        </>
        )
    }

}

export default About;