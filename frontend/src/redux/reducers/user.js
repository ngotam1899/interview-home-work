import { UserActionTypes } from "../actions/user";

const init = {
  list: [],
};


export default function(state = init, action) {
  switch (action.type) {
    case UserActionTypes.GET_LIST:
      return {
        ...state,
      };
    case UserActionTypes.GET_LIST_ERROR:
      return {
        ...state,
      };
    case UserActionTypes.GET_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload || []
      };
    default:
      return state;
  }
}