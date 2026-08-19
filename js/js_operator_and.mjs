import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { and } from "./and.mjs";
export function js_operator_and() {
  arguments_assert(arguments, 0);
  ("the && operator itself: its symbol together with the function that works it out");
  ("The same pairing every other binary operator is held as, so anything that already works one out from its symbol works && out too without being told about it.");
  let operator = js_operator_and_symbol();
  let fn = and;
  let o = {
    fn,
    operator,
  };
  return o;
}
