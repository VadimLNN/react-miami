import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                complited: false,
            });
        },
        remuveTodo() {},
        toggleTodoComplite() {},
    },
});

export const { addTodo, remuveTodo, toggleTodoComplite } = todoSlice.actions;
export default todoSlice.reducer;
