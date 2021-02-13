import { FETCH_DATA } from "../actions/types";

const initialState = {
  data: null,
};
interface Action{
  type: string;
  payload: object;
}

export default (state = initialState, action:Action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

