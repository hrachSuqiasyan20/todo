import React from 'react'

function TodoFooter({todo}) {
    console.log(todo);
    const completed = todo.filter((el) => el.completed == true).length
    const deletecompleted = () =>  {
      todo.filter((el) =>  el.completed == false)  
    }
  return (
    <div className='todoFoot'>
        <p>
            {
                todo.length
            }
            /
            {
                completed
            }
            
        </p>
        <button className='btn cancel' onClick={deletecompleted}>delete completed</button>
    </div>
  )
}

export default TodoFooter