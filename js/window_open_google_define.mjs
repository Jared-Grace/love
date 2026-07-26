import { text_combine } from "./text_combine.mjs";
import { window_open_google_search } from "./window_open_google_search.mjs";
export function window_open_google_define(item) {
  let query = text_combine("define:", item);
  window_open_google_search(query);
}
