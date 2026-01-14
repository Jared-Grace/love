import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export function list_filter_prefix_without(list, book_code) {
  let filtered = list_filter_starts_with(list, book_code);
  let mapped = list_map_prefix_without(filtered, book_code);
  return mapped;
}
