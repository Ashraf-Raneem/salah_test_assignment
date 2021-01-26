import {
    TOGGLE_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM,
    REDUCE_ITEMS,
  } from "./cart.types";
  import { addItem, reduceItem } from "./cart.utils";
  
  const INITIAL_STATE = {
    hidden: false,
    cartItems: [],
    total : 0,
  };
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TOGGLE_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden,
        };
      case ADD_ITEM:
        return {
          ...state,
          cartItems: addItem(state.cartItems, action.payload),
          total : state.total + parseInt(action.payload.price),
        };
      case REDUCE_ITEMS:
        return {
          ...state,
          cartItems: reduceItem(state.cartItems, action.payload),
          total : state.total - parseInt(action.payload.price)
        };
      case REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (cartItems) => cartItems._id !== action.payload._id
          ),
          total : state.total - parseInt(action.payload.price)
        };
  
      default:
        return state;
    }
  };
  export default cartReducer;
  