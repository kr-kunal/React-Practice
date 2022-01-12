import React, { Component } from 'react'
import SubOne from './SubOne';
import SubTwo from './SubTwo';
export const myContext = React.createContext();

class MainComp extends Component {

    state = {
        name: 'Kunal',
        rollNo: 19
    }

    render() {
        return (
            <div className="container m-4 h3">
                <p>Main</p>
                <myContext.Provider value = { this.state }>
                    <SubOne />
                    <SubTwo />
                </myContext.Provider>
            </div>
        )
    }
}

export default MainComp
