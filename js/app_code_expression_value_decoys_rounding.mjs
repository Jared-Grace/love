import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_operator_called_is } from "./app_code_operator_called_is.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { ceil } from "./ceil.mjs";
import { floor } from "./floor.mjs";
import { ternary } from "./ternary.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_expression_value_decoys_rounding(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values to offer beside the right one on a line whose division is rounded down: the other way of rounding when the part pressed was the rounding, the rounded number when it was the division, and the value of the whole line either way");
  ("Both are the slip the line itself invites. A learner who knows the formula ends in a whole number reaches for a whole number at the very first press, before the rounding has been pressed at all, so 14 / 4 is offered as 3 beside 3.5. And rounding is a choice of direction, so the one thing the rounding could come to instead is the number above it - which is the whole of what rounding up would have given.");
  ("The value of the whole line rides along with both, because answering the line instead of the step is the habit every lesson on this engine exists to break, and a learner still thinking in whole lines reaches for it.");
  ("The times and the minus on these lines are plain arithmetic, and they are answered with what a line of plain numbers is answered with, out of the one place that decides that. A second wording of the same two wrong values would drift from it, and the drift would show as one lesson offering a learner a habit the next lesson does not.");
  ("A candidate equal to the right answer is dropped, so the last press of a line offers only the one wrong value: by then the part IS the whole line and the two are the same number.");
  let symbol = property_get(node, "operator");
  let called = app_code_operator_called_is(symbol);
  let divided_by = js_operator_division_symbol();
  let dividing = equal(symbol, divided_by);
  let rounding_part = or(called, dividing);
  if (not(rounding_part)) {
    let plain = app_code_expression_value_decoys(current, node);
    return plain;
  }
  let value = app_code_expression_value(node);
  let acted_on = property_get(node, "right");
  let acted_on_value = app_code_expression_value(acted_on);
  let up = ceil(acted_on_value);
  let down = floor(value);
  let other_way = ternary(called, up, down);
  let whole = app_code_expression_value(current);
  let candidates = [other_way, whole];
  function wrong_is(candidate) {
    let differs = equal_not(candidate, value);
    return differs;
  }
  let wrong = list_filter(candidates, wrong_is);
  let decoys = list_unique(wrong);
  return decoys;
}
