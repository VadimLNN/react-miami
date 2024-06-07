import { useState } from "react";

const ForReduxTK = () => {
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

    return (
        <main className="section">
            <div className="container">
                <label>
                    <input
                        style={{ border: "2px black solid ", borderRadius: 5, margin: "5px", padding: "5px" }}
                        value={text}
                        onChange={(element) => setText(element.target.value)}
                    ></input>
                    <button style={{ margin: "5px", padding: "5px" }} onClick={addTodo}>
                        Add ToDo
                    </button>
                </label>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} style={{ margin: "5px" }}>
                            <inpute type="checkbox" />
                            <span>{todo.text}</span>
                            <span style={{ color: "red" }}>&times;</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default ForReduxTK;
