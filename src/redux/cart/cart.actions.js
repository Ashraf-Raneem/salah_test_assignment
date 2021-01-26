import {
    TOGGLE_HIDDEN,
    ADD_ITEM,
    REDUCE_ITEMS,
    REMOVE_ITEM,
  } from "./cart.types";
  
  export const toggleCartHidden = () => ({
    type: TOGGLE_HIDDEN,
  });
  
  export const addToCart = (items) => ({
    type: ADD_ITEM,
    payload: items,
  });
  
  export const reduceItem = (items) => ({
    type: REDUCE_ITEMS,
    payload: items,
  });
  
  export const removeItem = (items) => ({
    type: REMOVE_ITEM,
    payload: items,
  });
  