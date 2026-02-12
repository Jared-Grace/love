import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_code_brace_left } from "../../../love/public/src/js_code_brace_left.mjs";
import { js_code_bracket_open } from "../../../love/public/src/js_code_bracket_open.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_index_of_try } from "../../../love/public/src/text_index_of_try.mjs";
import { text_slice_0 } from "../../../love/public/src/text_slice_0.mjs";
import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { text_index_of_last } from "../../../love/public/src/text_index_of_last.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export function json_from_try(json) {
  let left = text_index_of_try(json, "{");
  let b = js_code_bracket_open();
  let v2 = js_code_brace_left();
  let list = [v2, b];
  function lambda(item) {}
  each(list, lambda);
  function lambda2(item2) {}
  let mapped = list_map(list2, lambda2);
  let skipped = text_skip(json, left);
  let right = text_index_of_last(skipped, "}");
  const without = text_slice_0(skipped, right + 1);
  let result = json_from(without);
  return result;
}
