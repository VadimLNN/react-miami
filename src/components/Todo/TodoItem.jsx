const TodoItem = (id, text, complited, toggleTodoComplite, remuveTodo) => {
    return (
        <li key={id} style={{ margin: "5px" }}>
            <input type="checkbox" checked={complited} onChange={toggleTodoComplite(id)} />
            <span style={{ padding: "5px" }}>{text}</span>
            <span style={{ color: "red", cursor: "pointer" }} onClick={remuveTodo(id)}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;
