import { lists_sizes_equal_assert } from "../../../love/public/src/lists_sizes_equal_assert.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
export function app_replace_rule_parse(rule) {
  let split = text_split_space(rule);
  let middle = list_index_of(split, ">");
  let left = list_take(split, middle);
  let right = list_skip(split, middle + 1);
  let filtered = list_filter_empty_not_is(left);
  lists_sizes_equal_assert([filtered, left]);e
  let v = {
    left,
    right,
  };
  return v;
}
