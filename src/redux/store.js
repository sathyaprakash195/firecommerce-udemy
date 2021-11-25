import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const composeEnhancers = composeWithDevTools({});


const initailStore ={
    cartReducer : {
        cartItems : JSON.parse(localStorage.getItem('cartItems')) ?? []
    }
}

export const store = createStore(rootReducer, initailStore ,  composeEnhancers());
