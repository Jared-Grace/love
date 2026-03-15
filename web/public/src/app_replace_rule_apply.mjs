import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_rule_apply(rule2, start, index) {
  let right = property_get(rule2, "right");
  let left = property_get(rule2, "left");
  let before = list_take(start, index);
  let size = list_size(left);
  let after = list_skip(start, index + size);
  start = list_concat_multiple([before, right, after]);
  return start;
}
