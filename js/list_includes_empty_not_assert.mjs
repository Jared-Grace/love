import { lists_sizes_equal_assert } from "./lists_sizes_equal_assert.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export function list_includes_empty_not_assert(list) {
  let filtered = list_filter_text_empty_not_is(list);
  lists_sizes_equal_assert([filtered, list]);
}
