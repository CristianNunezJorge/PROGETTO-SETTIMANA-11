import { SAVE_SONGS } from "../actions";
import type { AppAction } from "../actions";
import type { Track } from "../../types/Track";


export interface SongsState {
  [key: string]: Track[];
}

const initialState: SongsState = {};

const songsReducer = (
  state: SongsState = initialState,
  action: AppAction
): SongsState => {
  switch (action.type) {
    case SAVE_SONGS:
      return {
        ...state,
        [action.payload.key]: action.payload.songs,
      };

    default:
      return state;
  }
};

export default songsReducer;
