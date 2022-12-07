import "./newtask.css"
import { useState, useRef } from "react"

function NewTask({}) {

    const [todo, setTodo]  = useState([])
    const todoElementRef = useRef()

    function handleAddTodo(e){
        const element = todoElementRef.current.value
        todoElementRef.current.focus();
        if (element === '') return
        setTodo(prevTodo => {
            return [...prevTodo, {id: {todo}, name: element}]
        })
        console.log(element)
        todoElementRef.current.value = null
    }
    
    function handleKeyDown(e) {
        let key = e.key;
        if (e.key === 'Enter'){
        handleAddTodo();   
        }
    }

    return ( 
        <div className= "newTask">
            <h2 className="title">Enter new Task!</h2>
            <input type="text" className="input" ref={todoElementRef} 
            onKeyDown={(e) => handleKeyDown(e)} 
            onChange={(e)=> {setTodo(e.target.value)
            }} />
            <button className="addButton" onClick={handleAddTodo}>Add</button>
        </div> 
    );
}

export default NewTask;