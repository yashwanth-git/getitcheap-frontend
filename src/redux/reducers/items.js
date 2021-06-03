import { GETITEMS, CREATEITEM } from "../constants/actionTypes";

const initState = {
  allItems: [],
  searchedItems: [],
};

const items = (state = initState, action) => {
  switch (action.type) {
    case GETITEMS:
      return {
        ...state,
        ...action.payload,
      };
    case CREATEITEM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default items;
