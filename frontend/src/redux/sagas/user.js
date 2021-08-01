import { takeEvery, fork, all, call, put } from "redux-saga/effects";
import UserActions, { UserActionTypes } from "../actions/user";
import { getAllUser } from "../apis/user";

function* handleGetList({ payload }) {
  try {
    const result = yield call(getAllUser, payload);
    const data = result.data;
    yield put(UserActions.onGetListSuccess(data));
  } catch (error) {
    yield put(UserActions.onGetListError(error));
  }
}

export function* watchGetList() {
  yield takeEvery(UserActionTypes.GET_LIST, handleGetList);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
  ]);
}
