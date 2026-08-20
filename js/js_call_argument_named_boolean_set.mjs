import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
import { js_expression_boolean } from "./js_expression_boolean.mjs";
export async function js_call_argument_named_boolean_set(
  ast,
  selects,
  param_name,
  word,
) {
  "Points one argument of a call at a plain yes or no, saying which argument by the name the called function knows it as.";
  "The rest of this family could reach a name, a call, a getter, a field, a whole node and a written word, and a yes or no was the one shape left over. It was also the shape that stopped the naming path: an argument written out as false had no verb, so the leaf holding one had to be typed by hand at the end of a chain that was otherwise all commands.";
  let expression = js_expression_boolean(word);
  await js_call_argument_named_node_set(ast, selects, param_name, expression);
}
