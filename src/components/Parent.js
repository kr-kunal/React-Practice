import React, { Component } from 'react'
import Child from './Child';
class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             msg: 'Parent Class'
        }
        this.greetMsg = this.greetMsg.bind(this);
    }

    greetMsg(name){
        alert(`Hello From ${this.state.msg} & ${name}`);
    }
    

    render() {
        return (
            <div className="container mt-5">
                <h1>Parent</h1>
                <Child greet={this.greetMsg} />
            </div>
        )
    }
}

export default Parent;
