import { FETCH_DATA } from "../actions/types";
import { urls } from "../urls/urls";

const list: object[] = []

urls.map((item) => {
  list.push({name: item});
});

const initialState = {
  data: list,
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

