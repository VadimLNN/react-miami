import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoComplite, remuveTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} toggleTodoComplite={toggleTodoComplite} remuveTodo={remuveTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
