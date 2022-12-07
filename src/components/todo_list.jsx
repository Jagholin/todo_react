function TodoList(props) {

    console.log(props.itemSelected);
    return ( 
            <div className="card">
                <ul className="list-group list-group-flush">
                {
                    props.items.todo.map((todo, index) =>  
                        <li onClick={() => {props.setItemSelected(index)}} key={index} className={props.itemSelected == index ? "list-group-item active" : "list-group-item"}>
                        <input type="checkbox" /> {todo}
                        </li>
                    )
                }
                </ul>
            </div>
    );
    
}

export default TodoList;
