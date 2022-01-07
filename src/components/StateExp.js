import  { Component } from "react";

class StateExp extends Component{

    constructor(){
        super()
        this.state = {
            msg: 'Hello & Welcome'
        }
    }

    likeMsg(){
        this.setState({
            msg: 'Thanks For Like'
        })
    }

    render(){
        return <div className="container mt-4"> 

        <h2>{this.state.msg}</h2>
        <button onClick = { this.likeMsg.bind(this) } className="btn btn-lg btn-primary"> Like </button>
        
        </div>
    }
}

export default StateExp;