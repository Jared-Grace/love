import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_expression_node_not_of_parts(parts) {
  arguments_assert(arguments, 1);
  ("a given left, operator and right with a ! written in front of the whole of it, built into the shape a press-at-a-time lesson asks about: !(3 < 5), or !(true && false)");
  ("Nothing here decides anything - the three pieces are handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own pieces could only serve the first.");
  ("It is told nothing about which operator stands between them, and it must not be. Two lessons build this same shape out of two different alphabets - one puts a comparison under the ! and one puts an && or an || there - and neither needs anything said here to change. That is why it wears a name of its own rather than one lesson's, which is what it used to wear.");
  ("The brackets are not written here and do not have to be. A ! is worked out before every operator these lessons put under one, so a shape saying the ! holds the whole of what follows can only be printed back as the line it means with a pair around it, and the printer works that out from the strengths.");
  let symbol = js_operator_bang_symbol();
  let inner = app_code_expression_node(parts.left, parts.symbol, parts.right);
  let tree = app_code_expression_node_before(symbol, inner);
  return tree;
}
