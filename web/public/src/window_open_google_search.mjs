import { window_open } from "../../../love/public/src/window_open.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function window_open_google_search(query) {
  window_open(text_combine("https://www.google.com/search?q=", query));
}
