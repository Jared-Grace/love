import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { window_open_google_search } from "../../../love/public/src/window_open_google_search.mjs";
export function window_open_bible_word(item) {
  let letters_only = text_letters_only(item);
  window_open_google_search(
    text_combine_multiple([letters_only, "+meaning+bible"]),
  );
}
