import { list_join } from "./list_join.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { text_split } from "./text_split.mjs";
export function text_adjascent_duplicates_remove(t, separator) {
  let split = text_split(t, separator);
  let filtered = list_filter_text_empty_not_is(split);
  let joined = list_join(filtered, separator);
  return joined;
}
