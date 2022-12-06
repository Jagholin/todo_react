function TodoList(props) {
    return ( <div class="card"><ul class="list-group list-group-flush">
        {props.items.map((todo, index) =>
            <li class="list-group-item">
                {todo}
            </li>)
        }
    </ul>

    </div> );
}

export default TodoList;
