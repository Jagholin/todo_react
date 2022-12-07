import "./newtask.css"
import { useState} from "react"
function NewTask({state}) {
    const [todo, setTodo]  = useState("")
    return ( 
        <div className= "newTask">
            <h2 className="title">Enter new Task!</h2>
            <input type="text" className="input" onChange={(e)=> {
                setTodo(e.target.value)
            }} />
        </div> 
    );
}

export default NewTask;