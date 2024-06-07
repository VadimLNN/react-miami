import { combineReducers, applyMiddleware } from "redux";
import { cashReduser } from "./cashReduser";
import { customerReduser } from "./customerReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    cash: cashReduser,
    customers: customerReduser,
});

export const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
