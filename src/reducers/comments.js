import { SAVE_COMMENT } from "../actions/types";

export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    default:
      return state;
  }
}
