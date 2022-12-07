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
    },
  ]);

  // index of currently selected item
  const [selected, setSelected] = useState(0);

  const handleTaskDelete = () => {
    if (selected >= state.length) {
      console.log("selected element index out of bounds");
      return;
    }

    setState(state.filter((_, ind) => ind !== selected));
  };

  const handleTaskEdit = () => {
    if (selected >= state.length) {
      console.log("selected element index out of bounds");
      return;
    }
    let newTodo = prompt("Edit todo task description:", state[selected].todo);
    if (newTodo === null) {
      return; // User pressed cancel
    }
    if (newTodo.length > 0) {
      setState(
        state.map((val, ind) =>
          ind !== selected ? val : { todo: newTodo, done: false }
        )
      );
    } else {
      // Treat 0-length input as erasing the item
      handleTaskDelete();
    }
  };

  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <NewTask />
          <Buttons
            state={state}
            onTaskEdit={handleTaskEdit}
            onTaskDelete={handleTaskDelete}
          />
        </div>
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
