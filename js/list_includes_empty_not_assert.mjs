import { lists_sizes_equal_assert_json } from "./lists_sizes_equal_assert_json.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export function list_includes_empty_not_assert(list) {
  let filtered = list_filter_text_empty_not_is(list);
  lists_sizes_equal_assert_json([filtered, list], {
    hint: "the list shouldn't contain any empty-text entries — one or more were empty",
  });
}
