import add from './add.png'
import './CreateTodoButton.css'
function CreateTodoButton({onAdd}){
    return(
        <div>
            <button className='button-add' onClick={
                (event) =>{
                    console.log('Le diste click')
                    onAdd()
                    // const newTodo = {text: 'nuevo todo', completed: false}
                    // todos.push(newTodo)
                    // setTodos(todos)
                } 
                }><img src={add} alt = 'add'/></button>
        </div>    
    )
}
export {CreateTodoButton}