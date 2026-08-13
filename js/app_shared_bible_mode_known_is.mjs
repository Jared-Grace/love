import { app_shared_bible_modes } from "./app_shared_bible_modes.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_shared_bible_mode_known_is(mode) {
  "Whether a word in a link names one of the two ways a bible page can be read.";
  "A word that names neither used to be carried straight through and compared against the one that opens the verse reader. It never matched, so every misspelling silently opened the whole-chapter reader instead - no error anywhere, and a reader who asked for one verse quietly given the other thing.";
  let modes = app_shared_bible_modes();
  let named = list_includes(modes, mode);
  return named;
}
