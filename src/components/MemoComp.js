import React, {useState} from 'react'
import MemoChild from './MemoChild';

function MemoComp() {

    const [ count, setCount ] = useState(0)
    const [ data, setData ] = useState(0)

    return (
        <>
            <div className="container mt-4 h2"> 
            <p> Memo { count } </p>
            <MemoChild data={data}/>
            <button className="btn btn-md btn-primary" 
            onClick={() => setCount(count + 1) }> Count 
            </button>
            <button className="btn btn-md btn-primary ms-4" 
            onClick={() => setData(data + 1) }> Data 
            </button>
            </div>
        </>
    )
}

export default MemoComp
