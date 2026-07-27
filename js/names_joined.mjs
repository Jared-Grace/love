import { list_sort_text } from "./list_sort_text.mjs";
export function names_joined(names, text_join) {
  let sorted = list_sort_text(names);
  let joined = text_join(sorted);
  return joined;
}
