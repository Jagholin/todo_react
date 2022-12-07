import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/buttons";
import Footer from "./components/footer";
import Header from "./components/Header";
import NewTask from "./components/Newtask";
import TodoList from "./components/todo_list";
import { useState } from "react";

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
