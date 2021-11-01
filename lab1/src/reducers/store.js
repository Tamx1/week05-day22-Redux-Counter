import { createStore, combineReducers } from "redux";
import Number from "./Number/Number";

const red = combineReducers({ Number });
const store = createStore(red);

export default store;
