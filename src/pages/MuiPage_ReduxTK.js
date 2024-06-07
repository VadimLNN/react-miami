import { useState } from "react";

import TodoList from "../components/Todo/TodoList";
import InputField from "../components/Todo/InputField";

const MuiPage_ReduxTK = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    complited: false,
                },
            ]);
            setText("");
        }
    };

    const remuveTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };

    const toggleTodoComplite = (todoId) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== todoId) return todo;

                return {
                    ...todo,
                    complited: !todo.complited,
                };
            })
        );
    };

    return (
        <main className="section">
            <div className="container">
                <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
                <TodoList todos={todos} toggleTodoComplite={toggleTodoComplite} remuveTodo={remuveTodo} />
            </div>
        </main>
    );
};

export default MuiPage_ReduxTK;
