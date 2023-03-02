import React from 'react';
import './App.css';
import MyName from "./Components/MyName/MyName";
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
    {/*<Counter/>*/}
      <ToDoList/>
    </div>
  );
}

export default App;
