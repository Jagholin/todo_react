import "./Newtask.css"
import { useRef } from "react"

function NewTask({items, setItems}) {

    // const [todo, setTodo]  = useState([])
    const todoElementRef = useRef()

    function handleAddTodo(e){
        const element = todoElementRef.current.value
        todoElementRef.current.focus();
        if (element === '') return
        setItems(prevTodo => {
            let newItems = [...prevTodo, {done: false, todo: element}];
            console.log(newItems);
            return newItems;
        })
        console.log(element)
        todoElementRef.current.value = null
    }
    
    function handleKeyDown(e) {
        // let key = e.key;
        if (e.key === 'Enter'){
        handleAddTodo();   
        }
    }

    return ( 
    <>
        <h2 className="title">Enter new Task!</h2>
        <div className= "newTask">
            <input type="text" className="input" ref={todoElementRef} 
            onKeyDown={(e) => handleKeyDown(e)}  />
            <button className="addButton" onClick={handleAddTodo}>Add</button>
        </div>
    </>
    );
}

export default NewTask;