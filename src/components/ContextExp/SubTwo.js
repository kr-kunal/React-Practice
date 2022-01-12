import React, { Component } from 'react'
import { myContext } from './MainComp'


class SubTwo extends Component {
    render() {
        return (
            <div>
                <myContext.Consumer>
                    { data => <h3> {data.rollNo} </h3> }
                </myContext.Consumer>
            </div>
        )
    }
}

export default SubTwo
