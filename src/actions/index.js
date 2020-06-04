export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHANGE_RATIO = "CHANGE_RATIO";

export const addItem = (name, value) => ({
  type: ADD_ITEM,
  name,
  value,
});

export const removeItem = (id) => ({ type: REMOVE_ITEM, id });

export const changeRatio = (value) => ({ type: CHANGE_RATIO, value });
