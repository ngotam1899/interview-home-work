import { takeEvery, fork, all, call, put } from "redux-saga/effects";
import BlogActions, { BlogActionTypes } from "../actions/blog";
import { getAllBlog, getCommentsByBlog, getBlog } from "../apis/blog";

function* handleGetList({ payload }) {
  try {
    let result;
    if(payload === "") result = yield call(getAllBlog);
    else result = yield call(getAllBlog, payload);
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

function* handleGetDetail({ payload }) {
  try {
    const result = yield call(getBlog, payload.blogId);
    const data = result.data;
    yield put(BlogActions.onGetDetailSuccess(data));
  } catch (error) {
    yield put(BlogActions.onGetDetailError(error));
  }
}

export function* watchGetList() {
  yield takeEvery(BlogActionTypes.GET_LIST, handleGetList);
}
export function* watchGetComment() {
  yield takeEvery(BlogActionTypes.GET_COMMENT, handleGetComment);
}
export function* watchGetDetail() {
  yield takeEvery(BlogActionTypes.GET_DETAIL, handleGetDetail);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchGetComment),
    fork(watchGetDetail)
  ]);
}
