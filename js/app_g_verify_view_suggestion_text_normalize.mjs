import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_g_verify_view_suggestion_text_normalize(t) {
  arguments_assert(arguments, 1);
  let split = t.split("\n");
  function line_trim(one) {
    let r = one.trim();
    return r;
  }
  function line_full(one) {
    let g = greater_than(one.length, 0);
    return g;
  }
  let r5 = split.map(line_trim).filter(line_full).join("\n");
  return r5;
}
