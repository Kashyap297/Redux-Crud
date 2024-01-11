import { createStore } from "redux";
import crudReducer from "./Reducer";

const store = createStore(crudReducer)

export default store