import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { window_open_google_search } from "../../../love/public/src/window_open_google_search.mjs";
export function window_open_google_define(item) {
  let letters_only = text_letters_only(item);
  window_open_google_search(text_combine("define:", letters_only));
}
