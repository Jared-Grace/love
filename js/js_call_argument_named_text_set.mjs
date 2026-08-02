import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
export async function js_call_argument_named_text_set(
  ast,
  selects,
  param_name,
  word,
) {
  "Points one argument of a call at a written word saying which argument by the name the called function knows it as";
  "The rest of this family could reach a name a call a field or a getter and a plain piece of writing was the shape left over";
  "The word is quoted before it is written so nothing handed in here can arrive as code and the command stays approvable once";
  let node_argument = js_expression_string(word);
  await js_call_argument_named_node_set(
    ast,
    selects,
    param_name,
    node_argument,
  );
}
