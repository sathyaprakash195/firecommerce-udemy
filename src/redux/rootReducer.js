import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
const rootReducer = combineReducers({
    cartReducer : cartReducer,
})

export default rootReducer