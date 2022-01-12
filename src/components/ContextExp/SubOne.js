import React, { Component } from 'react'
import { myContext } from './MainComp'

class SubOne extends Component {
    render() {
        return (
            <div>
                <myContext.Consumer>
                    { data => <h3> {data.name} </h3> }
                </myContext.Consumer>
            </div>
        )
    }
}

export default SubOne
