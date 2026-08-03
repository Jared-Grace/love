import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { text_first } from "./text_first.mjs";
import { text_last } from "./text_last.mjs";
import { js_code_bracket_close } from "./js_code_bracket_close.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_code_bracket_open } from "./js_code_bracket_open.mjs";
import { json_ends_find_index } from "./json_ends_find_index.mjs";
import { json_starts_find_index } from "./json_starts_find_index.mjs";
import { text_take } from "./text_take.mjs";
import { text_skip } from "./text_skip.mjs";
import { json_from } from "./json_from.mjs";
export function json_from_try(json) {
  let left = json_starts_find_index(json);
  let skipped = text_skip(json, left);
  let right = json_ends_find_index(skipped);
  let count = add(right, 1);
  let without = text_take(skipped, count);
  let first = text_first(without);
  let right2 = js_code_bracket_open();
  if (equal(first, right2)) {
    let last = text_last(without);
    let end = js_code_bracket_close();
    if (equal_not(last, end)) {
      without += end;
    }
  }
  let result = json_from(without);
  return result;
}
