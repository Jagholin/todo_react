
function TodoList(props) {

    console.log(props.itemSelected);

    const checkHandler = (index) => () => {
        let newItems = props.items.map(
            (val, idx) => index === idx ? 
                {todo: val.todo, done: !val.done}: 
                val);
        console.log(newItems);
        props.setItems(newItems);
    } 

    // props.items is now {todo: string, done: bool}[]
    return ( 
            <div className="card todo-list">
                <ul className="list-group list-group-flush">
                {
                    props.items.map((todo, index) =>
                        <li onClick={() => {props.setItemSelected(index)}} key={index} className={props.itemSelected === index ? "list-group-item active" : "list-group-item"}>
                        <input type="checkbox" checked={todo.done} onChange={checkHandler(index)}/> {todo.todo}
                        </li>
                    )
                }
                </ul>
            </div>
    );
    
}

export default TodoList;
