import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_operators_raw } from "./js_operators_raw.mjs";
export function js_code_operators_raw(code) {
  arguments_assert(arguments, 1);
  ("The same question asked of written-out code rather than of code already read in");
  let ast = js_parse(code);
  let raw = js_operators_raw(ast);
  return raw;
}
