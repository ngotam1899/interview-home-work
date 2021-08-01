import { BlogActionTypes } from "../actions/blog";

const init = {
  list: [],
  comments: []
};


export default function(state = init, action) {
  switch (action.type) {
    case BlogActionTypes.GET_LIST:
      return {
        ...state,
      };
    case BlogActionTypes.GET_LIST_ERROR:
      return {
        ...state,
      };
    case BlogActionTypes.GET_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload || []
      };
    case BlogActionTypes.GET_COMMENT:
      return {
        ...state,
      };
    case BlogActionTypes.GET_COMMENT_ERROR:
      return {
        ...state,
      };
    case BlogActionTypes.GET_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload || []
      };
    default:
      return state;
  }
}
