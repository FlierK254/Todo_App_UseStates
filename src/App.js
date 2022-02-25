import React from 'react';
//import reactDom from 'react-dom';
import Style from './App.css';
import ToDo from './Components/ToDo/ToDo';
//import ToDoList from './Components/ToDoList/ToDoList';
//import Activities from './Components/Navbar/Activities';
//import Completed from './Components/Navbar/completed';
//import Tasks from './Components/Navbar/Tasks';
//import Navbar from './Components/Navbar/Navbar';
//import { Route, Link,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='outer-box'>
      <h3>This is my todo app</h3>
      <ToDo/>
    {/* <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path ="/" exact element={<ToDoList/>}/>
        <Route path ="Activities" element={<Activities/>}/>
        <Route path ="Tasks" element={<Tasks/>}/>
        <Route path="Completed" element ={<Completed/>}/>

      </Routes>
    </BrowserRouter>
     */}
    </div>
//     <div className="App">
      
//       <ToDoList/>
//       <div className='addition'>
//       <form>
//   <label>
    
//     <input className='Add' type="text" name="task" />
//   </label>
//   <button type='button'>Add task</button>
// </form></div>
//     </div>
  );
}

export default App;
