import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";

const initial_state = {};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initial_state,
  compose(
    applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;
