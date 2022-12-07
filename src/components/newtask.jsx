import "./Newtask.css"
import { useState} from "react"
function NewTask({state}) {
    const [todo, setTodo]  = useState("")
    return ( 
        <div className= "newTask">
            <h2>Enter new Task!</h2>
            <input type="text" onChange={(e)=> {
                setTodo(e.target.value)
            }} />
        </div> 
    );
}

export default NewTask;