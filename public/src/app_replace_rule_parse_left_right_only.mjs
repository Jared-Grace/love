import { text_replace_curried_right_2 } from "../../../love/public/src/text_replace_curried_right_2.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_includes_empty_not_assert } from "../../../love/public/src/list_includes_empty_not_assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
export function app_replace_rule_parse_left_right_only(rule) {
  let split = text_split_space(rule);
  let middle = list_index_of(split, ">");
  let r2 = text_replace_curried_right_2(">>", ">");
  let mapped = list_map(split, r2);
  let left = list_take(mapped, middle);
  let right = list_skip(mapped, middle + 1);
  each([left, right], list_includes_empty_not_assert);
  let p = {
    left,
    right,
  };
  return p;
}
