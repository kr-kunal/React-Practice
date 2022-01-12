import React, { Component } from 'react'
import Army from './Army'


export class ArmyMan1 extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.hocHandleFire}>Army Man 1 has {this.props.hocGun} & Fire {this.props.hocFire} </h3>
            </div>
        )
    }
}

export default Army(ArmyMan1)
