import React from 'react'

function Todo({ text }) {
    return (
        <div className="todo">
            <li className="todo-item">
                { text }
            </li>
            <button className="complete-btn"><li className="fas fa-check"></li></button>
            <button className="trash-btn"><li className="fas fa-trash"></li></button>
        </div>
    )
}

export default Todo
