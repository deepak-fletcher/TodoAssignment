import React, { useEffect, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";



const ListTodo = ({todoItems,setTodoItems}) => {
const handleChecked=(id)=>{
    const updatedTodo = todoItems.map((todo)=>{
        if(todo.id===id)
        {
            return{...todo,state:!todo.state}
        }
        return todo
    })
    setTodoItems(updatedTodo)
}
  return (
    <div class="bg-black">
    {
        todoItems.map(({id, description, state}) =>(
            <div class="flex w-[80%] mt-3 m-auto flex-row border-2 border-slate-300">
                 <p id={id}  class={`flex w-[50%] m-auto bg-black text-white ${state? "line-through": ""}`}>
                {description}
                </p>
                <input class="w-50% m-auto" type="checkbox" onChange={()=>handleChecked(id)} name={description} value={description} checked={state}></input>
            </div>
        ) )
    }
    </div>
  )
}

export default ListTodo