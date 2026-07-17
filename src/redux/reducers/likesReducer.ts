import { TOGGLE_LIKE } from "../actions";
import type { AppAction } from "../actions";


export type LikesState = number[];

const initialState: LikesState = [];

const likesReducer = (
  state: LikesState = initialState,
  action: AppAction
): LikesState => {
  switch (action.type) {
    case TOGGLE_LIKE:
      if (state.includes(action.payload)) {
        
        return state.filter((id) => id !== action.payload);
      }
     
      return [...state, action.payload];

    default:
      return state;
  }
};

export default likesReducer;
