import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
export function app_code_expression_parts_code(parts) {
  arguments_assert(arguments, 1);
  ("one side of a line written out, from the three pieces it is held as: a left, an operator and a right come back as 3 + 4");
  ("Two sides are told apart by what they say, not by what they are made of. The numbers alone would call 3 + 4 and 4 + 3 the same side, and a lesson redrawing a side until it differs from the other one would never stop being handed a side that reads differently and counts as a repeat.");
  let node = app_code_expression_node(parts.left, parts.symbol, parts.right);
  let code = app_code_expression_code(node);
  return code;
}
