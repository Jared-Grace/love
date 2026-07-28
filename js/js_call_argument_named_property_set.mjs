import { arguments_assert } from "./arguments_assert.mjs";
import { js_property_expression } from "./js_property_expression.mjs";
import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
export async function js_call_argument_named_property_set(
  ast,
  selects,
  param_name,
  object_name,
  property_name,
) {
  arguments_assert(arguments, 5);
  ("Points one argument of a call at a field of something already in scope, naming");
  ("the argument as the called function knows it and the value as two names.");
  ("The rest of this family could point an argument at a whole local or at a call,");
  ("and a field of a local was the shape left over - which is the commonest one of");
  ("all inside a loop, where what is in scope is the record and what is wanted is");
  ("one thing out of it. Until this existed that argument had to be written as a");
  ("line, so a call needing one field fell off the approved path entirely and");
  ("asked the human, for a change that could only ever have said one thing.");
  let node_argument = js_property_expression(object_name, property_name);
  await js_call_argument_named_node_set(
    ast,
    selects,
    param_name,
    node_argument,
  );
}
