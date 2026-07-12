import { text_includes_curried_right } from "./text_includes_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_text_includes(mapped, part) {
  let lambda = text_includes_curried_right(part);
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
