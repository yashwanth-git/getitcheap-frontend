import axios from "axios";

import { CREATEITEM, GETITEMS } from "../constants/actionTypes";
import { createItem, fetchItems } from "../../api";

//Get All Item
export const getItems = () => async (dispatch) => {
  try {
    const { data } = await fetchItems();
    dispatch({
      type: GETITEMS,
      payload: {
        allItems: data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

//Create Item
export const addItem = (item) => async (dispatch) => {
  try {
    const { data } = await axios.post(createItem(item));
    dispatch({
      type: CREATEITEM,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
