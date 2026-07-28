import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_call_empty } from "./js_call_empty.mjs";
import { js_call_argument_named_node_set } from "./js_call_argument_named_node_set.mjs";
export async function js_call_argument_named_getter_set(
  ast,
  selects,
  param_name,
  getter_name,
) {
  arguments_assert(arguments, 4);
  ("Points one argument of a call at a constant's getter, naming the argument as");
  ("the called function knows it and the constant by its own name. The shape a");
  ("written value takes when it stops being spelled out and starts being asked");
  ("for.");
  ("This was the commonest hand edit left in the repo by a distance - a spelling");
  ("routed through the name that holds it, done twenty-odd times in a day, every");
  ("one of them a text edit because the only verb that could set an argument");
  ("either wanted a name already in scope or wanted a written line and so had to");
  ("be approved afresh each time.");
  ("Both arguments are bare names, which is what keeps it approvable once: the");
  ("name of the constant is checked to be only a name before it is called, so");
  ("nothing worked out can arrive here dressed as a getter.");
  let identifier = js_identifier_expression(getter_name);
  let node_argument = js_call_empty(getter_name);
  await js_call_argument_named_node_set(
    ast,
    selects,
    param_name,
    node_argument,
  );
}
