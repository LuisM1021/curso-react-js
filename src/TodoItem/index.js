import check from './check.png';
import del from './delete.png'
import './TodoItem.css'
import React from 'react'
function TodoItem({text,completed,onComplete,index,onDelete}){
    return(
      <li>
         <img className = {`check ${completed ? 'checked':'' }`} src={check} alt='check' 
        onClick={()=>{
          onComplete(index)
        }}/>
        <p className={`todo-text ${completed && 'todo-text-completed'}`}>{text}</p>
         <img src={del} alt='delete' onClick={onDelete}/> 
      </li>
    );
  }
  export {TodoItem}