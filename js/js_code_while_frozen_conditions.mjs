import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_while_frozen_conditions } from "./js_while_frozen_conditions.mjs";
export function js_code_while_frozen_conditions(code) {
  arguments_assert(arguments, 1);
  ("The same question asked of written-out code rather than of code already read in");
  let ast = js_parse(code);
  let frozen = js_while_frozen_conditions(ast);
  return frozen;
}
