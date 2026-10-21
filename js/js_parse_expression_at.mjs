import { arguments_assert } from "./arguments_assert.mjs";
import { module_acorn_get } from "./module_acorn_get.mjs";
import { js_parse_generic_arg } from "./js_parse_generic_arg.mjs";
export function js_parse_expression_at(code, offset) {
  arguments_assert(arguments, 2);
  ("the expression that begins at offset in code, parsed with the options every parse here uses, so its pieces say where they stand in the whole of code rather than in a copy cut out of it");
  let acorn = module_acorn_get();
  let r = js_parse_generic_arg();
  let expression = acorn.parseExpressionAt(code, offset, r);
  return expression;
}
