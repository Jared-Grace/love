import { text_word_only } from "./text_word_only.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { window_open_google_search } from "./window_open_google_search.mjs";
export function window_open_bible_word(item) {
  let word_only = text_word_only(item);
  window_open_google_search(
    text_combine_multiple([word_only, "+meaning+bible"]),
  );
}
