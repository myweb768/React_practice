import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";


function App(){
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([])
  const [editId, setEditId] = useState(null);

  //Create Todo
  function handelAddTodo(){
    if (text.trim() == "") return;
      setTodo([...todo, {
        id: Date.now(),
        text: text,
        completed: false
      }])
      setText("")
    
  }

  //Todo Status
  function handelTodoStatus(id){
    setTodo(
      todo.map((item=>
        item.id  == id
        ?{...item, completed: !item.completed}
        : item
      ))
    );
  };

  //Delete Todo
  function handelDeleteTodo(index){
    setTodo(todo.filter((item, i)=> i !== index))
  }

  //Edit Todo
  function handelEditTodo(item){
    setText(item.text)
    setEditId(item.id)
  }

  //Update Edit Todo
  function handelUpdateTodo(){
    if(text.trim() === "") return;

    setTodo(
      todo.map((item)=>(
        item.id === editId
        ? {...item, text: text.trim()}
        :item
      ))
    )

    setText("");
    editId(null)
  };

  return(
    <>
    <h2>Todo App</h2>
    <div className="flex border-2 border-blue-400 rounded-xl">
      <Input text={text} setText={setText}/>
      <Button
      title={editId !== null ? "Update" :"Add"}
      bgColor={editId !== null?"bg-blue-600":"bg-green-600 w-[20%]"}
      eventClick={editId !== null?handelUpdateTodo:handelAddTodo}
      />
    </div>

    <div className="p-3 m-3 w-[98%] border-2 rounded-xl border-blue-400">
      <ul className="list-none">
        {todo.map((item, index)=>(
        <div className="flex justify-between items-center">
          <input 
          type="checkbox"
          checked = {item.completed}
          onChange={()=>handelTodoStatus(item.id)}
          className="h-5 w-5 accent-green-500 cursor-pointer"
          />
          <li
        // key = {item.id}
         className={`${item.completed ? "line-through opacity-50": "" }text-white text-xl w-[80%] font-medium m-3 border border-blue-300 rounded-xl p-2`}>{item.text} </li>
         <Button title="Edit" bgColor={"bg-blue-400"} eventClick={()=> handelEditTodo(item)}/>
         <Button title="Delete" bgColor={"bg-red-400"} eventClick={()=> handelDeleteTodo(index)}/>
        </div>
         
        ))}
      </ul>
    </div>

    </>
  )
}

export default App;