import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
function Values() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() *20) + 1
            }
        ])
    }
    return (
        <div>
            <button onClick={addItem}style={{padding:"3px",top:"20px",position:"relative"}}>Add the number</button>
            <ul>
                {items.map(item => (
                    <label key={item.id}>{item.value}</label>
                ))}
            </ul>
        </div>
    )
}

export default Values
