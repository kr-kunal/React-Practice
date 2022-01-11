import React,{ useState } from 'react'

function HighOrdComp() {
    return (
        <div className="container mt-3 h3">
            <h3> HOC </h3>
            <HOC cmp={Counter}/>
        </div>
    )
}

function HOC (props) {
    return <props.Counter/>
}

function Counter() {

    const [count, setCount] = useState(0)

    return <div> 
        <h3>{count}</h3>
        <button className="btn btn-outline-primary" onClick={() => setCount(count + 1)}> Update </button>
    </div>
    
}

export default HighOrdComp
