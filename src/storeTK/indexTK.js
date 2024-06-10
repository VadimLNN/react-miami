import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlace";

export default configureStore({
    reducer: { todos: todoReducer },
});
