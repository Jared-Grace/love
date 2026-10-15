import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { text_is } from "./text_is.mjs";
import { app_code_text_join_decoys } from "./app_code_text_join_decoys.mjs";
import { list_concat } from "./list_concat.mjs";
import { equal_not } from "./equal_not.mjs";
import { number_nan_is } from "./number_nan_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_expression_value_decoys(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values to offer beside the right one when a learner is asked what the operator they just chose comes to: the value the OTHER operator would have given on the same two numbers, and the value the whole line comes to");
  ("Both are mistakes somebody actually makes, and neither is a near miss. The first is the slip of reading the symbol wrong - 2 * 3 answered as 5. The second is answering the line instead of the step, which is the very habit the step-at-a-time lesson before this one exists to break; a learner still thinking in whole lines reaches for it.");
  ("Nothing invented and nothing counted off. A wrong answer built by nudging the right one - one more, one less - would sit in the dead zone where the learner cannot tell whether they have miscounted or misread, and would be asking about arithmetic rather than about the step.");
  ("Either candidate is dropped when it equals the right answer, so the last step of a line offers only the one wrong value: by then the step IS the whole line, and the two are the same number.");
  let left = property_get(node, "left");
  let symbol = property_get(node, "operator");
  let right = property_get(node, "right");
  let value = app_code_operator_solve(left, symbol, right);
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let times_is = equal(symbol, times);
  let other = ternary(times_is, plus, times);
  let slipped = app_code_operator_solve(left, other, right);
  let whole = app_code_expression_value(current);
  let candidates = [slipped, whole];
  ("2026-10-15, seen on screen: two pieces of text joined have no other operator's value, since text times text is not a value, so on its own a join was asked with one button. It is offered the wrong joins the lesson on joining two names offers");
  if (text_is(left) && text_is(right)) {
    let joins_wrong = app_code_text_join_decoys(left, right);
    candidates = list_concat(candidates, joins_wrong);
  }
  function wrong_is(candidate) {
    "A misread symbol on two strings is not a value at all: \"a\" * \"b\" is NaN, which would show up as an answer nobody could have meant.";
    let differs = equal_not(candidate, value);
    let b = number_nan_is(candidate);
    let number = not(b);
    let r = differs && number;
    return r;
  }
  let wrong = list_filter(candidates, wrong_is);
  let decoys = list_unique(wrong);
  return decoys;
}
