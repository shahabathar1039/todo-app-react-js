import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <input type="text" className="todo-input" />
                <button class="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div class="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
