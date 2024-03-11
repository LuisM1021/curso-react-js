import './TodosEmpty.css'
import React from 'react'
function TodosEmpty({create}){
    if(create){
        return(
            <>
                <li className='emptyTodoMessage'>
                    <p>Crea un Todo</p>
                </li>
            </>
        );
    }else{
        return(
            <>
                <li className='emptyTodoMessage'>
                    <p>No se encontraron TODOS</p>
                </li>
            </>
        )
    }
    
  }
  export {TodosEmpty}