import { createStore, combineReducers } from "redux";
import { cashReduser } from "./cashReduser";
import { customerReduser } from "./customerReduser";

const rootReducer = combineReducers({
    cash: cashReduser,
    customers: customerReduser,
});

export const store = createStore(rootReducer);
