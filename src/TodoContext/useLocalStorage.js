import React from 'react'
function useLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue)  
  const [loading,setLoading] = React.useState(true)
  const [error,setError] = React.useState(false)
  React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem = JSON.parse(localStorageItem) || initialValue
          setItem(parsedItem)
          setLoading(false)
        }catch(error){
          setError(true)
          setLoading(false)
        }
      },2000)
    },[])
    
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName,JSON.stringify(newItem))
      setItem(newItem)
    }
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  export { useLocalStorage }

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de react js', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Descansar', completed: true}
// ]

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')