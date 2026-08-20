import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_expression_node_not_of_parts(parts) {
  arguments_assert(arguments, 1);
  ("a given comparison with a ! written in front of the whole of it, built into the shape a press-at-a-time lesson asks about: !(3 < 5)");
  ("Nothing here decides anything - the comparison is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own numbers could only serve the first.");
  ("The brackets are not written here and do not have to be. A ! is worked out before a comparison, so a shape saying the ! holds the whole comparison can only be printed back as the line it means with a pair around it, and the printer works that out from the strengths.");
  let symbol = js_operator_bang_symbol();
  let inner = app_code_expression_node(parts.left, parts.symbol, parts.right);
  let tree = app_code_expression_node_before(symbol, inner);
  return tree;
}
