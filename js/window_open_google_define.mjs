import { text_letters_only } from "./text_letters_only.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open_google_search } from "./window_open_google_search.mjs";
export function window_open_google_define(item) {
  window_open_google_search(text_combine("define:", item));
}
