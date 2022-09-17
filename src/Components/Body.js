import {React,useState} from 'react'
import Navbar from './Navbar'
import TODO_SAMPLE_DATA from "./Constants.js"
import ListTodo from './ListTodo'
import AddTodo from './AddTodo'


const Body = () => {


    const handleDelete=()=>{
        const updatedTodo = todoItems.filter((todo)=>!todo.state)
        setTodoItems(updatedTodo)
    }

  const [todoItems, setTodoItems] = useState(TODO_SAMPLE_DATA);
  return (
    <div class="bg-black bg-cover">
        <Navbar/>
        <AddTodo
        todoItems={todoItems}
        setTodoItems={setTodoItems}/>
        <ListTodo
        todoItems={todoItems}
        setTodoItems={setTodoItems}/>
        <p class="w-[100px] h-[25px] mt-[20px] text-black rounded-md hover:bg-sky-100 hover:cursor-pointer m-auto bg-white" onClick={handleDelete}>
            Delete
        </p>
    </div>
  )
}

export default Body