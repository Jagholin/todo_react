import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/buttons";
import Footer from "./components/footer";
import Header from "./components/header";
import NewTask from "./components/newtask";
import TodoList from "./components/todo_list";
import { useState } from "react";

/* eslint no-unused-vars:"off" */

function App() {
  // all the state goes here!
  const [state, setState] = useState([
    {
      todo: "create a todo app",
      done: false,
    }
  ]);

  // index of currently selected item
  const [selected, setSelected] = useState(0);

  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <NewTask />
          <Buttons />
        </div>
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
