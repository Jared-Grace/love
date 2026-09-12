import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_operator_called_is } from "./app_code_operator_called_is.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { ternary } from "./ternary.mjs";
import { floor } from "./floor.mjs";
import { ceil } from "./ceil.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_expression_value_decoys_rounding(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values to offer beside the right one on a line whose division is rounded down: the decimal the rounding is about and the two whole numbers either side of it, and the value of the whole line");
  ("One decimal decides the whole press either way. On the division it is the value the division comes to, and on the rounding it is the number standing inside the brackets - the same number, one press apart, which is why the three values offered are the same three on both presses and the right answer is a different one of them each time.");
  ("All three are the slip the line itself invites. A learner who knows the formula ends in a whole number reaches for a whole number at the very first press, before the rounding has been pressed at all, so 14 / 4 is offered as 3 and as 4 beside 3.5. And rounding is a choice of direction, so when the rounding is the press the number above it is offered, and so is the decimal itself - which is the answer of a learner who read the brackets and did nothing with them.");
  ("★ THE NUMBER ABOVE AND THE NUMBER BELOW USED TO BE OFFERED ONE AT A TIME, ONE ON EACH PRESS, AND ON A LINE THAT IS NOTHING BUT A ROUNDED DIVISION THAT LEFT A COIN TO FLIP. There the value of the whole line is the rounded division, so it and the whole number below the decimal are the same number, and dropping the duplicate left the press with a single wrong value. Offering both whole numbers costs the longer lines one more button and leaves no press on any of these lines answerable without reading it.");
  ("The value of the whole line rides along with all of them, because answering the line instead of the step is the habit every lesson on this engine exists to break, and a learner still thinking in whole lines reaches for it.");
  ("The times and the minus on these lines are plain arithmetic, and they are answered with what a line of plain numbers is answered with, out of the one place that decides that. A second wording of the same two wrong values would drift from it, and the drift would show as one lesson offering a learner a habit the next lesson does not.");
  ("A candidate equal to the right answer is dropped, so the decimal goes when the division is the press and the whole number below it goes when the rounding is: the right answer is never also offered as a wrong one.");
  ("The division these lines are drawn from never comes out even, so the decimal always has a whole number on each side of it and there is always more than one wrong value to offer.");
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
  let decimal = ternary(called, acted_on_value, value);
  let below = floor(decimal);
  let above = ceil(decimal);
  let whole = app_code_expression_value(current);
  let candidates = [decimal, below, above, whole];
  function wrong_is(candidate) {
    let differs = equal_not(candidate, value);
    return differs;
  }
  let wrong = list_filter(candidates, wrong_is);
  let decoys = list_unique(wrong);
  return decoys;
}
