import { takeEvery, fork, all, call, put } from "redux-saga/effects";
import BlogActions, { BlogActionTypes } from "../actions/blog";
import { getAllBlog, getCommentsByBlog } from "../apis/blog";

function* handleGetList({ payload }) {
  try {
    const result = yield call(getAllBlog, payload);
    const data = result.data;
    yield put(BlogActions.onGetListSuccess(data));
  } catch (error) {
    yield put(BlogActions.onGetListError(error));
  }
}
function* handleGetComment({ payload }) {
  try {
    const result = yield call(getCommentsByBlog, payload);
    const data = result.data;
    yield put(BlogActions.onGetCommentSuccess(data));
  } catch (error) {
    yield put(BlogActions.onGetCommentError(error));
  }
}

export function* watchGetList() {
  yield takeEvery(BlogActionTypes.GET_LIST, handleGetList);
}
export function* watchGetComment() {
  yield takeEvery(BlogActionTypes.GET_COMMENT, handleGetComment);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchGetComment),
  ]);
}
