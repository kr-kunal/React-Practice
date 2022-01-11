import React, { Component } from 'react'

export class RefComp extends Component {

    constructor() {
        super()
        this.inputRef = React.createRef()
    }

    editFocus = () => {
        // console.log(this.inputRef);
        this.inputRef.current.focus()
        // this.inputRef.current.value='Kunal'
    }

    render() {
        return (
            <div className="container mt-4 h2">
                <p>Refs In React</p>
                <input ref={this.inputRef} type="text" className="form-control" placeholder="Enter Text Here" />
                <button className="btn btn-md btn-secondary m-3" onClick={this.editFocus}>Focus & Print</button>
            </div>
        )
    }
}

export default RefComp
