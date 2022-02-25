// import React,{useState} from 'react';
// import { ToDoS } from '../ToDoS/ToDoS';
// import ToDoLst from './ToDoList.css';
// import ToDo from '../ToDo/ToDo';
// const ToDoList = () => {
//     const[todos,setToDoS]=useState(ToDoS)
//     console.log(todos);
//   return <div>
    
//     <h1>Todo list </h1>
//     <div className='head'><h3>Name</h3>
//     <h3>Description</h3>
//     <h3>Due date</h3></div>
//     {todos.length>1 && 
//     <ToDo todos={todos}/>
//    // <button>Add some tasks in the list</button>
//     // {ToDoS.length>1 ?
//     //   <ToDo todos={todos}/>
//     //   :"Your list has nothing to display"
//   }
//   </div>;
// };
// export default ToDoList;
import React from 'react';
import ToDoLst from './ToDoList.css';
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
function ToDoList(props) {
    const {CompleteTodo, deleteTodo,editTodo}=props
    let todoArr=props.todoArr.length > 0 ? props.todoArr : JSON.parse(localStorage.getItem("todos"))
  return <div className="todo-list">
  
      <ul>
          {todoArr && todoArr.length > 0 ? todoArr.map((el,i) =>(
              <li key={i}>
              <div className={el["done"] ? "line.through" : null} > {el.title}</div>
             
                  <div className="icon">
                  {/* <i title='Complete' className='fas fa-check circle'/>*/
                  /*<i title='Delete' onClick={()=>deleteTodo(i)} className='fas fa-trash-alt circle'/>*/ 
                   /* <i title= "Complete" onClick ={()=>CompleteTodo(i)} 
                 className={ `FaCheckCircle ${el["done"] ? "green" : "blue"}`} />  */}
                 <FaCheckCircle onClick ={()=>CompleteTodo(i) } className={`${el["done"] ? "green" : "blue"}`}/> 
                 <FaPencilAlt onClick ={()=>editTodo(i) }/>
                <FaTrashAlt onClick={()=>deleteTodo(i)}/> 
              </div>
          </li>
          )) : null
          }
          
      </ul>

  </div>;
}

export default ToDoList;
