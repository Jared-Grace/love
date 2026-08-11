import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function js_statement_expression_of_type_or_null(node, type) {
  "$plain type";
  arguments_assert(arguments, 2);
  ("The piece of code a line is written around, handed back only when the line really is a bare piece of code and that piece is of the kind asked for, and nothing at all otherwise.");
  ("Two checks stand between a caller and the thing it wants, and neither is interesting on its own. A line may be a bare piece of code without being the kind wanted, and asking a line what it is written around before knowing it is written around anything reaches for something that is not there. So the pair is one question, and the caller that asked it in two steps had to write the refusal twice.");
  ("It hands back nothing rather than saying no, because every caller of this wants the piece itself the moment the answer is yes, and a caller given only yes would have to go and fetch it again.");
  let statement_is = js_node_type_is(node, "ExpressionStatement");
  if (not(statement_is)) {
    return null;
  }
  let expression = property_get(node, "expression");
  let type_is = js_node_type_is(expression, type);
  if (not(type_is)) {
    return null;
  }
  return expression;
}
