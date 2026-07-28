import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
export async function js_call_argument_named_call_set(
  ast,
  selects,
  param_name,
  f_name,
) {
  arguments_assert(arguments, 4);
  ("Points one argument of a call at a call to another function, naming the");
  ("argument as the called function knows it and the value by the function that");
  ("produces it. Two names, and nothing that has to be worked out.");
  ("This is the verb a constant with a getter needs. A file spelling the constant");
  ("out holds a copy of a decision that already has a name somewhere else, so");
  ("changing the decision changes only some of the copies; routing the spelling");
  ("through the name is what ends that. Until now the only way to write a getter");
  ("into an argument was to hand over a line of source, which no standing approval");
  ("can cover, so the commonest repair in the repo was the one that always asked.");
  ("The call is written from the named function's own parameters, the same way");
  ("every other generated call here is, so a getter takes none and arrives as");
  ("itself.");
  let node_argument = await js_call_new_expression(f_name, ast);
  await js_call_argument_named_node_set(
    ast,
    selects,
    param_name,
    node_argument,
  );
}
