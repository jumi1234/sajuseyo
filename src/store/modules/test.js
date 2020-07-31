import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const TEST = "TEST";

export const setPing = createAction(TEST);

const initialState = {
  val: "complete"
};

export default handleActions({
  [TEST]: (state, action) =>
    produce(state, draft => {
      draft.val = action.payload
    })
}, initialState);
