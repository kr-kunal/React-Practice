import React, { Component } from "react";

export class FormHandle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      message: ""
    };
  }

  userNameChange = (event) => {
    //   console.log(event.target.value);
    this.setState({
      userName: event.target.value
    }, );
    // console.log(this.state.userName);
  };

  messageChange = (event) => {
    this.setState({
      message: event.target.value
    });
  };

  done = event => {
     alert(`${this.state.message} From ${this.state.userName}`)
  }

  render() {
    return (
      <>
        <form onSubmit={this.done}>
          <div className="container m-5">
            <div className="form-outline mb-4">
              <label className="form-label">Name</label>
              <input
                type="text"
                id="uname"
                className="form-control"
                value={this.state.message}
                onChange={this.userNameChange}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                id="msg"
                rows="4"
                className="form-control"
                value={this.state.message}
                onChange={this.messageChange}
              > </textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Send
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default FormHandle;
