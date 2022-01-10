import React, { PureComponent } from 'react'

export class PureComp extends PureComponent  {

    constructor(props) {
        super(props)

        this.state = {
            value: 10
        }
    }


    render() {
        console.log(this.state);
        return (
            <>
                <div className="container mt-4"> 
                <p className="h2"> Pure Component </p>
                    <button className="btn btn-md btn-secondary"
                        onClick={() => {
                            this.setState({ value: 20 });
                        }}
                    >
                        Update State
                    </button>
                </div>
            </>
        )
    }
}

export default PureComp
