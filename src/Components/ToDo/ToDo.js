
import React,{useState} from 'react';
import ToDoList from '../ToDoList/ToDoList';
import ToDoStyle from "./ToDo.css";
import Info  from 'sweetalert';
function ToDo() {
  const[todo,setTodo]=useState({title: "",done: "false"})
  const[todoArr,setTodoArr]=useState([])
  let todos = localStorage.hasOwnProperty("todos")
  ?JSON.parse(localStorage.getItem("todos"))
  : []
  const onChange=(event)=>{
let{value}=event.target
let obj = {}
obj["title"]= value
obj["done"]=false
setTodo(obj)
  }
  const ToDo=(event)=>{
    const{name}=event.target
    if(event.key==="Enter" || name==="addTodo"){
      if (todo.title!==" ") {
        todos.unshift(todo)
        localStorage.setItem("todos",JSON.stringify(todos))
        setTodo({title:" ",done: "false"})
      } else{
        Info("Please write todo first","error")
      }
    }
  }
  const CompleteTodo = (i)=>{
    if(todos[i]["done"]!==true){
      todos[i]["done"]=true
      localStorage.setItem("todos",JSON.stringify(todos))
      setTodoArr(todos)
      Info("Todo completed","Finished");
    }
  }

  const editTodo =(key,i)=>{
    

  }
    // Info({
    //   title:"Are you sure you want to edit?",
    //   buttons: true
      

    // }).then((ToDo))
    //     // if (newEvent) {
    //     //   todos.push(i,1)
    //     //   localStorage.setItem('todos',JSON.stringify(todos))
    //     }
      
  
  const deleteTodo= (i)=>{
    Info({
      title: "Are you sure?",
      //text: "Once deleted , you will not be able to recover this file",
      //icon : "Warning",
      buttons: true,
      dangerMode: true
    }).then(res=>{
      if (res) {
        todos.splice(i,1)
        localStorage.setItem('todos',JSON.stringify(todos))

      }
    })
  }
  return <div className='container'>
    <div className='text-end'>
      <h2>Todo List app</h2>
      <h4>Add a new todo</h4>
    </div>
    <div className="textAddTodo">
      <input type='text' name='todo'placeholder='Enter your todo...' 
      value={todo.title} onKeyPress ={ToDo} onChange={onChange}/>
      <button className="btn-addTodo" type="button" name="addTodo"onClick={ToDo}>Add Todo</button>
    </div>
    
<ToDoList todoArr={todoArr}
CompleteTodo={CompleteTodo}
deleteTodo={deleteTodo}
editTodo={editTodo}/> 
  </div>;
}

export default ToDo;


