import React, { Component } from 'react'
import Army from './Army'


export class ArmyMan2 extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.hocHandleFire}>Army Man 2 has {this.props.hocGun} & Fire {this.props.hocFire} </h3>
            </div>
        )
    }
}

export default Army(ArmyMan2)
