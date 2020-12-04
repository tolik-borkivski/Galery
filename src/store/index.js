const { createStore, combineReducers, applyMiddleware } = require("redux");
const { galeryReducer } = require("./galery");
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    galery: galeryReducer
})

const middlewares = applyMiddleware(thunkMiddleware)

export const store = createStore(reducers, middlewares);