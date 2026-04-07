import { text_prefix_without_curried_right } from "../../../love/public/src/text_prefix_without_curried_right.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export function list_filter_starts_with_prefix_without(lines, prefix) {
  let filtered = list_filter_starts_with(lines, prefix);
  let r = text_prefix_without_curried_right(prefix);
  let without = list_map(filtered, r);
  return without;
}
