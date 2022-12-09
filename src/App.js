import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/buttons";
import Footer from "./components/footer";
import Header from "./components/Header";
import NewTask from "./components/Newtask";
import TodoList from "./components/todo_list";
import { useState } from "react";

/* eslint no-unused-vars:"off" */

function App() {
  // all the state goes here!

  // state is {todo: string, done: bool}[]
  // state was {todo: string[], done: bool[]}
  const [state, setState] = useState(
    [
      {
        todo: "Get groceries",
        done: false,
      },
      {
        todo: "Go for a walk",
        done: true,
      },
      {
        todo: "Go to doctor",
        done: false,
      },
      {
        todo: "React Tutorial",
        done: false,
      }
    ]
  );

  // index of currently selected item
  const [selected, setSelected] = useState(0);

  return (
    <div className="App">
      <Header />
      <div> 
        <div>
          <NewTask items={state} setItems={setState} />
          <Buttons />
        </div>
        <TodoList items={state} setItems={setState} itemSelected={selected} setItemSelected={setSelected}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
