import React from 'react'
import "../App.css"
function Todoitems(){
    const todostyle = {
        marginBottom:"1px solid grey"
    }
    return(
        <div className="todo-item" style={todostyle}>
                <input type="checkbox"/>
                <p>placeholder goes here</p>
        </div>
    )
}
export default Todoitems