import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'
function TodoForm(){
    const{addTodo,setNewTodoText,createTodo} = React.useContext(TodoContext)
    return(
        <form onSubmit={(event)=>event.preventDefault()}>
            <label>Crea tu TODO</label>
            <textarea 
            onChange={(event)=>setNewTodoText(event.target.value)}
            placeholder='Cortar cebolla para la cena'>
            </textarea>
            <div className='TodoForm-buttonContainer'>
                <button onClick={()=>createTodo()} className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
                <button 
                onClick={
                    ()=>addTodo()
                }
                 className='TodoForm-button TodoForm-button--add'>Crear</button>
            </div>
        </form>
    )
}

export {TodoForm}