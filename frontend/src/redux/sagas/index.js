import { all } from "redux-saga/effects";

import blog from "./blog";
import user from "./user";

export default function* rootSaga(getState) {
  yield all([
    blog(), user()
  ]);
}