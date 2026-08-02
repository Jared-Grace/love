import { js_call_argument_copy } from "./js_call_argument_copy.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function js_operator_call_to_node_unary(node, o) {
  "Turn a call on one thing back into the operator written before it - the call standing for a denial becomes the mark that denies. The twin beside this one does the same for the operators written between two things.";
  "A throwaway is parsed to get a real node of the right shape, then its operator and its one operand are overwritten, exactly the way the twin does it. Building the node by hand would mean spelling out every field a reader of this shape expects, and the parser already knows them all.";
  let operator = property_get(o, "operator");
  let argument = js_call_argument_copy(node, 0);
  let expression = js_parse_expression("!a");
  property_set(expression, "operator", operator);
  property_set(expression, "argument", argument);
  object_replace(node, expression);
}
