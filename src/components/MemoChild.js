import React,{ memo } from 'react'

function MemoChild(props) {
    return ( <>
        <div className="container h3">
            {props.data}
            { console.log("hi") }
        </div>
        </>
    )
}

export default memo(MemoChild)
