import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
export function app_code_expression_parts_node(parts) {
  arguments_assert(arguments, 1);
  ("the shape for one side of a line, from the three pieces that side is held as: a left, an operator and a right come back as the shape 3 + 4 has");
  ("The three pieces and the shape say the same thing in two spellings, and the step between them was written out at four calls. A maker that hands its side over as pieces and a printer that wants a shape now meet at one name instead of each knowing the other's spelling.");
  let node = app_code_expression_node(parts.left, parts.symbol, parts.right);
  return node;
}
