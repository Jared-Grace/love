import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { boolean_is } from "./boolean_is.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
export function app_code_program_step_solve_decoys(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values offered for the operator a learner stepping through a program just pressed, on an expression of that program solved whole: current is the expression as it reads now and node the part pressed - the decoys_get of ",
    fn_name("app_code_expression_choose_order_ask"));
  ("The same rule ",
    fn_name("app_code_program_step_operator_decoys"),
    " gives for an operator asked for alone, read off the pressed part rather than off the trace: a true or false is offered the other of the two and nothing else; a number inside an expression that comes to true or false is offered only the other operator's value on the same two values; any other number is offered what the operator lessons offer, which includes what the whole expression comes to. So pressing one at a time or being asked for one cannot offer different wrong values for the same step.");
  let value = app_code_expression_value(node);
  if (boolean_is(value)) {
    let other = not(value);
    let decoys = [other];
    return decoys;
  }
  let whole_value = app_code_expression_value(current);
  let whole_boolean = boolean_is(whole_value);
  let whole = whole_boolean ? node : current;
  let decoys2 = app_code_expression_value_decoys(whole, node);
  return decoys2;
}
