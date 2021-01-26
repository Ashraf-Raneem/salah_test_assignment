import { combineReducers } from "redux";

import productReducer from "./products/products.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    products : productReducer,
    cart : cartReducer,
});