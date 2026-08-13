import { app_shared_bible_mode_apart_maximum } from "./app_shared_bible_mode_apart_maximum.mjs";
import { app_shared_bible_modes } from "./app_shared_bible_modes.mjs";
import { texts_nearest } from "./texts_nearest.mjs";
export function app_shared_bible_mode_suggestions(mode) {
  "The ways of reading spelled most like the word a link used, when the word names neither of them.";
  let modes = app_shared_bible_modes();
  let apart_maximum = app_shared_bible_mode_apart_maximum();
  let suggestions = texts_nearest(modes, mode, apart_maximum);
  return suggestions;
}
