import { text_empty_is } from "./text_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_text_empty_is(list) {
  "the empty pieces of text in a list, which is what a reader answering empty for what it could not read leaves behind";
  let filtered = list_filter(list, text_empty_is);
  return filtered;
}
