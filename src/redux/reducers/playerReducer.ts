import { SET_CURRENT_TRACK } from "../actions";
import type { AppAction } from "../actions";
import type { Track } from "../../types/Track";


export type PlayerState = Track | null;


const initialState: PlayerState = null;

const playerReducer = (
  state: PlayerState = initialState,
  action: AppAction
): PlayerState => {
  switch (action.type) {
    case SET_CURRENT_TRACK:
     
      return action.payload;

    default:
      return state;
  }
};

export default playerReducer;
