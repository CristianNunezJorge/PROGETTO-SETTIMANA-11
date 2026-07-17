import type { Track } from "../../types/Track";

// ============================================
// 1) I TYPE delle azioni: stringhe costanti.
//    Uso le costanti (e non stringhe scritte a mano ogni volta)
//    così un errore di battitura me lo segnala TypeScript
// ============================================
export const SAVE_SONGS = "SAVE_SONGS";
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const SEARCH_KEY = "search";

// ============================================
// 2) Un'interfaccia per ogni azione.
//    "type" è una stringa LETTERALE (typeof costante):
//    è il "discriminante" che permette a TypeScript di
//    capire, dentro ogni case, che payload c'è
// ============================================

// Salva canzoni: trasporta la chiave (rock, pop, search...)
// e l'array di canzoni scaricate
interface SaveSongsAction {
  type: typeof SAVE_SONGS;
  payload: {
    key: string;
    songs: Track[];
  };
}

// Imposta la traccia corrente nel player: trasporta una Track intera
interface SetCurrentTrackAction {
  type: typeof SET_CURRENT_TRACK;
  payload: Track;
}

// Toggle like: trasporta solo l'id della canzone
interface ToggleLikeAction {
  type: typeof TOGGLE_LIKE;
  payload: number;
}

// ============================================
// 3) L'unione discriminata: tutte le azioni possibili
//    dell'app in un tipo unico. Redux manda OGNI azione
//    a TUTTI i reducer, quindi ogni reducer riceve questo
//    tipo e con lo switch capisce se l'azione lo riguarda
// ============================================
export type AppAction = SaveSongsAction | SetCurrentTrackAction | ToggleLikeAction;

// ============================================
// 4) ACTION CREATORS: funzioni che ricevono il payload
//    e restituiscono l'oggetto azione già formato
// ============================================
export const saveSongs = (key: string, songs: Track[]): SaveSongsAction => ({
  type: SAVE_SONGS,
  payload: { key, songs },
});

export const setCurrentTrack = (track: Track): SetCurrentTrackAction => ({
  type: SET_CURRENT_TRACK,
  payload: track,
});

export const toggleLike = (id: number): ToggleLikeAction => ({
  type: TOGGLE_LIKE,
  payload: id,
});
