import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_rule_apply(rule, index, start) {
  let right = property_get(rule, "right");
  let left = property_get(rule, "left");
  let before = list_take(start, index);
  let size = list_size(left);
  let after = list_skip(start, text_combine(index, size));
  start = list_concat_multiple([before, right, after]);
  return start;
}
