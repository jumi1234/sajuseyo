import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga from "../../lib/createRequestSaga";
import * as noteAPI from "../../lib/api/note";
import { takeLatest } from "redux-saga/effects";
import { pender } from "redux-pender";

const SET_INPUT_VALUE = "notes/SET_INPUT_VALUE";

const ADD_NOTE = "notes/ADD_NOTE";
const ADD_NOTE_SUCCESS = "notes/ADD_NOTE_SUCCESS";
const ADD_NOTE_FAILURE = "notes/ADD_NOTE_FAILURE";

export const setInputValue = createAction(SET_INPUT_VALUE, value => value);

export const addNote = createAction(ADD_NOTE, noteAPI.add);

export const addNoteSuccess = createAction(ADD_NOTE_SUCCESS, note => note);

export const addNoteFailure = createAction(ADD_NOTE_FAILURE, error => error);

const addNoteSaga = createRequestSaga(ADD_NOTE, noteAPI.add);

export function* noteSaga() {
  yield takeLatest(ADD_NOTE, addNoteSaga);
}

const initialState = {
  inputValue: "",
  note: "",
};

export default handleActions({
  [SET_INPUT_VALUE]: (state, action) =>
    produce(state, draft => {
      draft.inputValue = action.payload;
    }),
  [ADD_NOTE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.note = action.payload.data;
    }),
  [ADD_NOTE_FAILURE]: (state, action) =>
    produce(state, draft => {
      draft.error = "에러"
    }),
  // ...pender({
  //   type: addNote,
  //   onSuccess: (state, action) =>
  //     produce(state, draft => {
  //       draft.note = action.payload.data;
  //     })
  // })
}, initialState);
