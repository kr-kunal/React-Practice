import React from 'react'

function ListRender() {

    // const item = [{ id:1, name:'Jay'}, { id:2, name:'Guru'}, { id:3, name:'Dev'}]
    const item = ['Jay', 'Guru', 'Dev']
    // const itemList = item.map(print => <h2 key={print.id}> {print.id} {print.name} </h2>)
    const itemList = item.map((print,index) => <h2 key={index}> {index} {print} </h2>)
    return (
        <>
        <div className="container m-4">
            { itemList }
        </div>
        </>
    )
}

export default ListRender;
