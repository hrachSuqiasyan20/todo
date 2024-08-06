import React from 'react'
import TodoListItem from '../../todoListItem/TodoListItem'

function TodoList({todo,deleteFunc,completedTask}) {
  return (
        <ul>
            <TodoListItem todo={todo} deleteFunc={deleteFunc} completedTask={completedTask}/>
        </ul>
  )
}

export default TodoList