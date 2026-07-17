// createStore è deprecato solo per spingerti verso Redux Toolkit:
// funziona benissimo. La doc consiglia l'alias legacy_createStore
// per zittire la riga barrata nell'editor
import { combineReducers, legacy_createStore as createStore } from "redux";
import songsReducer from "./reducers/songsReducer";
import playerReducer from "./reducers/playerReducer";
import likesReducer from "./reducers/likesReducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  player: playerReducer,
  likes: likesReducer,
});

// Trucco della doc: ReturnType me lo ricava dal rootReducer,
// senza che io lo scriva (e lo tenga aggiornato) a mano
export type RootState = ReturnType<typeof rootReducer>;

// Riga documentata per far vedere lo store all'estensione
// Redux DevTools del browser: se l'estensione c'è, la uso
// come "enhancer"; se non c'è, passo undefined e non cambia nulla
const devTools = (
  window as unknown as { __REDUX_DEVTOOLS_EXTENSION__?: () => undefined }
).__REDUX_DEVTOOLS_EXTENSION__?.();

const store = createStore(rootReducer, devTools);

// Tipo del dispatch dello store (servirà ai componenti)
export type AppDispatch = typeof store.dispatch;

export default store;
