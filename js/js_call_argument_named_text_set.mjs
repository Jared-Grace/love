import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
export async function js_call_argument_named_text_set(
  ast,
  selects,
  param_name,
  word,
) {
  let node_argument = js_expression_string(word);
  await js_call_argument_named_node_set(
    ast2,
    selects2,
    param_name2,
    node_argument2,
  );
}
