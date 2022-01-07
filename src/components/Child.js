import React from 'react'

const Child = (props) => {
    return (
        <div>
            <h2>Child</h2>
            <button onClick={ () => props.greet('Good Afternoon')} className="btn btn-md btn-danger"> Hit Me </button>
        </div>
    )
}

export default Child; 
