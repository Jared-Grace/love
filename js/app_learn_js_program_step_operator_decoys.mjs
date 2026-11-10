import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_node_index_is } from "./app_learn_js_expression_node_index_is.mjs";
import { list_concat } from "./list_concat.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { boolean_is } from "./boolean_is.mjs";
import { not } from "./not.mjs";
import { app_learn_js_expression_value_decoys } from "./app_learn_js_expression_value_decoys.mjs";
export function app_learn_js_program_step_operator_decoys(action) {
  arguments_assert(arguments, 1);
  ("the wrong values offered beside the right one when a learner stepping through a program is asked what an operator in a line comes to; action is an evaluate from the program's trace that has an expression");
  ("2026-10-15, at the human's asking, when !, && and || came to be stepped through: an operator that comes to true or false is offered the other of the two and nothing else, the reason ",
    fn_name("app_learn_js_expression_value_decoys_boolean"),
    " gives for a comparison - the whole line's value is a true or false as well, so it would be the right answer half the time, and another operator's value is a true or false already on offer, or a number no reading of the line could give. Any other operator is offered what the operator lessons offer: the other operator's value on the same two values, and what the whole expression comes to, the mix-up of solving the line instead of the step");
  let value = property_get(action, "value");
  let expression0 = property_get(action, "expression");
  if (app_learn_js_expression_node_index_is(expression0)) {
    ("2026-11-10, at the human's asking: an item read by its index, as a[2], is offered the index itself, the mix-up of answering where rather than what, and every other item of the array, the mix-up of counting from the wrong place. Not picked: only the items on either side, as the lessons on a.length offer, which left a[2] of three items with one wrong choice");
    let items = property_get(expression0, "left");
    let index = property_get(expression0, "right");
    let candidates = list_concat([index], items);
    function wrong_is(candidate) {
      let differs = equal_not(candidate, value);
      return differs;
    }
    let wrong = list_filter(candidates, wrong_is);
    let unique = list_unique(wrong);
    return unique;
  }
  if (boolean_is(value)) {
    let other = not(value);
    let decoys = [other];
    return decoys;
  }
  let expression = property_get(action, "expression");
  let whole_value = property_get(action, "whole_value");
  ("2026-10-15, seen offline: a number solved inside a comparison, as 10 % 2 in 10 % 2 === 0 is, would be offered the true the whole line comes to, an answer of another kind that no reading of the step could give; it is then offered only the other operator's value, by handing in the step itself as the whole, whose value is the right answer and so is dropped");
  let whole_boolean = boolean_is(whole_value);
  let whole = whole_boolean ? expression : whole_value;
  let decoys2 = app_learn_js_expression_value_decoys(whole, expression);
  return decoys2;
}
