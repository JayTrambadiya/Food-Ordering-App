import React from "react";
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:this.props.name,
        }
    }
    
    render(){
        return <h2>I am Profile {this.state.name}</h2>
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }


}


export default Profile;