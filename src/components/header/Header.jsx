import React from 'react'

function Header({add,setValue,value}){
    console.log(add);
  return (
    <div className='header'>
        <input type="text" value={value} onChange={(e) => {
          setValue(e.target.value)
        }}/>
        <button className='btn' onClick={()=>add(value)}>Add</button>
    </div>
  )
}

export default Header