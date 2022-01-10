import React, { Component } from "react";
import Child from "./Child";

export class LifeCycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: true
        };
        console.log("Constructor Here");
    }
    
    render() {
        return (
            <>
                <div className="container mt-4">
                    <h3> Component Will Unmount</h3>
                    {
                        this.state.active ? <Child/> : null
                    }
                    
                    <button className="btn btn-md btn-danger"
                        onClick={() => {
                            this.setState({ active: !this.state.active });
                        }}
                    >
                        Delete
                    </button>
                    
                </div>
            </>
        );
    }
}

export default LifeCycle;


// =========================================

// constructor(props) {
//     super(props)

//     this.state = {
//         data: null
//     }
//     console.log("Constructor Here")
// }

// componentDidMount(){
//     console.log("Component Did Mount Here");
//     this.setState({data:"Updated"})
// }

// render() {
//     console.log("Render Here");
//     return (
//         <>
//             <div className="container mt-4">
//                 <h3> Component Did Mount</h3>
//                 {console.log("hi")}
//             </div>

//         </>
//     )
// }

// =====================================================

// constructor(props) {
//     super(props);

//     this.state = {
//         active: null,
//         data: null,
//     };
//     console.log("Constructor Here");
// }

// componentDidUpdate() {
//     if (this.state.data == null) {
//         this.setState({data:'kunal'})
//     }
//     console.log("Component Did Update Here");
// }

// render() {
//     return (
//         <>
//             <div className="container mt-4">
//                 <h3> Component Did Mount</h3>
//                 <button
//                     onClick={() => {
//                         this.setState({ active: "Update" });
//                     }}
//                 >
//                     Click
//                 </button>
//             </div>
//         </>
//     );
// }

