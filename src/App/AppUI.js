import {TodoCounter} from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading'
import {TodosError} from '../TodosError'
import {TodosEmpty} from '../TodosEmpty'
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm'
import React from 'react'
import { TodoContext } from '../TodoContext';

function AppUI(){
    const {
      openModal,
      setOpenModal
    } =React.useContext(TodoContext)
    return (
        // <React.Fragment>
        <div className = 'principal-container'>
          <TodoCounter/>
          <TodoSearch/>
    
          <TodoContext.Consumer>
            {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
              totalTodos,
            })=>(
              <TodoList>
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && searchedTodos.length === 0 && totalTodos === 0) && <TodosEmpty create ={true}/>}
              {(!loading && searchedTodos.length === 0 && totalTodos > 0) && <TodosEmpty create ={false}/>}
              {searchedTodos.map((todo,index) =>(
                  <TodoItem key={todo.text}
                 text={todo.text}
                 completed={todo.completed}
                 onComplete={completeTodo}
                 index={index}
                 onDelete={()=>deleteTodo(todo.text)}
                 />
              ))}
            </TodoList>
            )}
          </TodoContext.Consumer>
           <TodoContext.Consumer>
            {({
              createTodo
            })=>(
              <CreateTodoButton onAdd={createTodo}/>
            )}
          </TodoContext.Consumer> 
          
          {openModal && <Modal>
                <TodoForm/>
              </Modal>}
        </div>        
        /* </React.Fragment> */
      );
}
export{AppUI}