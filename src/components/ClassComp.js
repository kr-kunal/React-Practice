import react from "react";

class ClassComp extends react.Component {
    render() {
        const { name, type } = this.props;
        return ( <div className="container mt-5">
            <h2>Hello {name} From {type} Component</h2>
            </div>
        )
    }
}

export default ClassComp;