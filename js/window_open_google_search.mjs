import { window_open } from "./window_open.mjs";
import { text_combine } from "./text_combine.mjs";
export function window_open_google_search(query) {
  window_open(text_combine("https://www.google.com/search?q=", query));
}
