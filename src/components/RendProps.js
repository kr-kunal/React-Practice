import React, {Component} from "react";

class RendProps extends Component {
  render() {
    return (
      <div className="container m-3">
        <h1>Render Props Demo</h1>
        <ParentComponent />
      </div>
    );
  }
}

class ChildComponent extends Component {
    render() {
      return (
        <div>
          <h2>I am Child Component</h2>
          {this.props.render()}
        </div>
      );
    }
  }

class ParentComponent extends Component {
    render() {
        return (
            <ChildComponent
            render={() => {
                return (
                    <div>
              <h3>I am coming from render props</h3>
            </div>
          );
        }}
        />
        );
    }
}


export default RendProps;
