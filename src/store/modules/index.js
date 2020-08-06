import notes from "./notes";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { noteSaga } from "./notes";

export default combineReducers({
  notes
});

export function* rootSaga() {
  yield all(
    noteSaga(),
  );
}
