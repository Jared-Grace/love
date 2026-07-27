import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function js_call_argument_named_set(
  ast,
  selects,
  param_name,
  code,
) {
  arguments_assert(arguments, 4);
  ("Changes one argument of a call, saying which one by the name the called");
  ("function knows it as. Counting from the left would name the same argument by");
  ("where it happens to sit, so adding a parameter upstream would silently point");
  ("every written address at its neighbour.");
  ("The called function is asked what its parameters are, so a name that is not");
  ("one of them is caught here rather than becoming a call nobody meant.");
  ("The twin taking a plain name instead of a written line is the one that can be");
  ("granted a standing approval, so prefer it and come here only when what goes in");
  ("genuinely has to be worked out.");
  let parsed = js_parse_expression(code);
  await js_call_argument_named_node_set(ast, selects, param_name, parsed);
}
