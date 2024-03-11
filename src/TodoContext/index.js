import React from 'react'
import { useLocalStorage } from './useLocalStorage'


const TodoContext = React.createContext()

function TodoProvider({children}){
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const [newTodoText,setNewTodoText] = React.useState('')
    console.log(newTodoText)
    console.log('Los usuarios buscan ',searchValue)
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1',[])
    console.log('array nuevo de todos: ',todos)

    const completedTodos = todos.filter(todo => todo.completed).length
  
    const totalTodos = todos.length

    const searchedTodos = todos.filter((todo =>{
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    }))

    // const findedTodos  = false
    // if(totalTodos > 0 && searchedTodos.length === 0){
    //   searchedTodos.length //To avoid the message of create a todo
    // }
  
    const completeTodo = (todoIndex) =>{
      const newTodos = [...todos]
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }
    const deleteTodo = (text)=>{
      const newTodos = todos.filter(todo => todo.text !== text)
      saveTodos(newTodos)
    }
    const createTodo = ()=>{
      // const newTodo = {text: 'new Todo',completed: false}
      // const newTodos = [...todos,newTodo]
      // saveTodos(newTodos)
      // openModal ? setOpenModal(false) : setOpenModal(true)
      setOpenModal(state => !state)
    }
    const addTodo = ()=>{
      const newTodo = {text: newTodoText,completed: false}
      const newTodos = [...todos,newTodo]
      saveTodos(newTodos)
      createTodo()
    }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            createTodo,
            totalTodos,
            openModal,
            setOpenModal,
            addTodo,
            setNewTodoText
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}