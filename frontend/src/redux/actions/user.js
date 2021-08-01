export const UserActionTypes = {
  GET_LIST: "GET_LIST",
  GET_LIST_SUCCESS: "GET_LIST_SUCCESS",
  GET_LIST_ERROR: "GET_LIST_ERROR",
}

Object.keys(UserActionTypes).forEach((key) => {
  UserActionTypes[
    key
  ] = `USER_${UserActionTypes[key]}`;
});

const onGetList = (payload) => ({
  type: UserActionTypes.GET_LIST,
  payload,
});

const onGetListSuccess = (payload) => ({
  type: UserActionTypes.GET_LIST_SUCCESS,
  payload,
});

const onGetListError = (error) => ({
  type: UserActionTypes.GET_LIST_ERROR,
  payload: error,
});

const UserActions = {
  onGetList,
  onGetListSuccess,
  onGetListError,
};

export default UserActions;