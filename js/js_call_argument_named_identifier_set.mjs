import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
export async function js_call_argument_named_identifier_set(
  ast,
  selects,
  param_name,
  identifier_name,
) {
  arguments_assert(arguments, 4);
  ("Points one argument of a call at something already in scope, naming the");
  ("argument as the called function knows it and the value as this function knows");
  ("it. Two names, and nothing that has to be worked out.");
  ("This is the verb that finishes a generated call. A call written from the");
  ("callee's own parameters arrives with those parameters' names in it, which are");
  ("right whenever both sides named the same thing the same way and wrong");
  ("otherwise; this is how the wrong ones get pointed at the local that was meant.");
  let node_argument = js_identifier_expression(identifier_name);
  await js_call_argument_named_node_set(
    ast,
    selects,
    param_name,
    node_argument,
  );
}
