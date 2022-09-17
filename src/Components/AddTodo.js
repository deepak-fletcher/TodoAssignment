import {React,useState} from 'react'

const AddTodo = ({setTodoItems, todoItems}) => {
  const [description, setDescription] = useState("")
  const [isInputVisible, setInputVisible] = useState(false)
  const handleSave=()=>{
    if(description)
    {
        setTodoItems([...todoItems, {id: todoItems.length+1,description: description, state: false}])
    }
    setDescription("")
  }
  return (
    <div class="w-[100%] mb-[20px]">
        {!isInputVisible &&<p class="w-[100px] h-[25px] mt-[20px] text-black rounded-md hover:bg-sky-100 hover:cursor-pointer m-auto bg-white" onClick={() => {setInputVisible(true)}}>
            Add todo
        </p>}
        {
            isInputVisible && (<div class="flex flex-row w-[50%] m-auto">
                <input class="h-[25px] m-auto mt-[20px] w-[50%]" name={description} placeholder="Enter your todo item" value={description} onChange={e=>setDescription(e.target.value)}/>
                <p class="w-[100px] h-[25px] mt-[20px] text-black rounded-md hover:bg-sky-100 hover:cursor-pointer m-auto bg-white" onClick={handleSave}>
                    Save
                </p>
                <p class="w-[100px] h-[25px] mt-[20px] text-black rounded-md hover:bg-sky-100 hover:cursor-pointer m-auto bg-white" onClick={() => setInputVisible(false)}>
                    Close
                </p>
                </div>
                )
        }
        
    </div>
  )
}

export default AddTodo