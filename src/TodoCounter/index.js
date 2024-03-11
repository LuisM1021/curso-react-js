import './TodoCounter.css'
import {DiamondIcon} from '../TodoIcon/DiamondIcon'
import React from 'react'
import { TodoContext } from '../TodoContext'
// const styles = {
//   fontSize: '24px',
//   textAlign: 'center',
//   margin: 0,
//   padding: '48px'
// }

function TodoCounter(){
  const props= React.useContext(TodoContext)
    if(props.loading){
      return (
        <h1 className='loading-state'>
          Cargando TODOS...
        </h1>
      )
    }else if(props.totalTodos === 0){
      return(
        // <h1>💎Felicidades no tienes TODOS por completar💎</h1>
        <DiamondIcon/>
      )
    }else{
      return (
        <h1>
          Has completado <span>{props.completedTodos}</span> de <span>{props.totalTodos}</span> TODOS
        </h1>
      )
    }
  }

  export { TodoCounter }