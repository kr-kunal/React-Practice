import React, { Component } from "react";

const Army = (Men) => {
  class ArmyMan extends Component {
    state = {
      Fire: 0,
    };
    handleFire = () => {
      this.setState({ Fire: this.state.Fire + 1 });
    };

    render() {
      return (
        <Men
          hocGun="AK47"
          hocFire={this.state.Fire}
          hocHandleFire={this.handleFire}
        />
      );
    }
  }
  return ArmyMan;
};
export default Army;
