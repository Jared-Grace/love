import { text_replace_curried_right_2 } from "./text_replace_curried_right_2.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes_empty_not_assert } from "./list_includes_empty_not_assert.mjs";
import { each } from "./each.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_take } from "./list_take.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_rule_parse_left_right_only(rule) {
  let split = text_split_space(rule);
  let middle = list_index_of(split, ">");
  let r = text_replace_curried_right_2(">>", ">");
  let mapped = list_map(split, r);
  let left = list_take(mapped, middle);
  let right = list_skip(mapped, text_combine(middle, 1));
  each([left, right], list_includes_empty_not_assert);
  let p = {
    left,
    right,
  };
  return p;
}
