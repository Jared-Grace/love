import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_return_argument_set } from "./js_return_argument_set.mjs";
export function js_statement_return_argument_set(ast, selects, code) {
  arguments_assert(arguments, 3);
  ("Sets what a selected return hands back, from written source. The setter under");
  ("this one takes an expression that is already a tree, which is the right shape");
  ("for code calling it and the wrong one for a person typing at a command line, so");
  ("the parsing lives here.");
  let node = list_single(selects);
  let expression = js_parse_expression(code);
  js_return_argument_set(node, expression);
}
