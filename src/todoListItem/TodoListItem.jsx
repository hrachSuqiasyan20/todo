import React from 'react'

function TodoListItem({todo,deleteFunc,completedTask}) {
    
  return (
    <div className='todo-par'>
        {todo.map((el) => {
            return(
                <div className="todoListItem" key={el.id}>
                    <div className="checkBox">
                        <input type="checkBox" checked={el.completed} onChange={() => completedTask(el.id)}/>
                        <li >
                            <label>{el.title}</label>
                        </li>
                    </div>
                    <div className="btn delete" onClick={() => deleteFunc(el.id)}>X</div>
                </div>
            )
        })}
    </div>
  )
}

export default TodoListItem