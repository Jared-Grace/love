import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_node_before_is } from "./app_learn_js_expression_node_before_is.mjs";
import { app_learn_js_operator_called_is } from "./app_learn_js_operator_called_is.mjs";
import { app_learn_js_expression_value_decoys_rounding } from "./app_learn_js_expression_value_decoys_rounding.mjs";
import { app_learn_js_operator_solve } from "./app_learn_js_operator_solve.mjs";
import { equal } from "./equal.mjs";
import { app_learn_js_operator_slice_symbol } from "./app_learn_js_operator_slice_symbol.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { add } from "./add.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { ternary } from "./ternary.mjs";
import { app_learn_js_expression_value } from "./app_learn_js_expression_value.mjs";
import { text_is } from "./text_is.mjs";
import { app_learn_js_text_join_decoys } from "./app_learn_js_text_join_decoys.mjs";
import { list_concat } from "./list_concat.mjs";
import { number_nan_is } from "./number_nan_is.mjs";
import { not } from "./not.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_learn_js_expression_value_decoys(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values to offer beside the right one when a learner is asked what the operator they just chose comes to: the value the OTHER operator would have given on the same two numbers, and the value the whole line comes to");
  ("Both are mistakes somebody actually makes, and neither is a near miss. The first is the slip of reading the symbol wrong - 2 * 3 answered as 5. The second is answering the line instead of the step, which is the very habit the step-at-a-time lesson before this one exists to break; a learner still thinking in whole lines reaches for it.");
  ("Nothing invented and nothing counted off. A wrong answer built by nudging the right one - one more, one less - would sit in the dead zone where the learner cannot tell whether they have miscounted or misread, and would be asking about arithmetic rather than about the step.");
  ("Either candidate is dropped when it equals the right answer, so the last step of a line offers only the one wrong value: by then the step IS the whole line, and the two are the same number.");
  let symbol = property_get(node, "operator");
  let called_before =
    app_learn_js_expression_node_before_is(node) &&
    app_learn_js_operator_called_is(symbol);
  if (called_before) {
    ("2026-11-12: a call round one number, as Math.floor(3.5) is, offers what the rounding lessons offer - the number left as it was, and it rounded the other ways. It has no left side to slip an operator on, and without this a program stepped to one threw, pressed alone or solved whole");
    let rounded_wrong = app_learn_js_expression_value_decoys_rounding(
      current,
      node,
    );
    return rounded_wrong;
  }
  let left = property_get(node, "left");
  let right = property_get(node, "right");
  let value = app_learn_js_operator_solve(left, symbol, right);
  ("2026-11-22, at the human's asking, seen on [4, 8, 7, 2].slice(2): slice was offered the whole line's value, which by the last step is the same array, so the two buttons both read [7, 2]. It is offered instead the items BEFORE the index, the mix-up of taking rather than skipping, and the slice one further on, the slip the Slice lesson's wrong programs teach against");
  if (equal(symbol, app_learn_js_operator_slice_symbol())) {
    let taken = list_take(left, right);
    let further = list_skip(left, add(right, 1));
    let slices = [taken, further];
    function slice_wrong_is(slice) {
      let differs2 = json_equal_not(slice, value);
      return differs2;
    }
    let slices_wrong = list_filter(slices, slice_wrong_is);
    return slices_wrong;
  }
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let times_is = equal(symbol, times);
  let other = ternary(times_is, plus, times);
  ("2026-11-12: Math.max slips to Math.min and back, the mix-up the lesson on keeping a value inside its edges warns of, since max sounds like the top");
  if (equal(symbol, "Math.max")) {
    other = "Math.min";
  }
  if (equal(symbol, "Math.min")) {
    other = "Math.max";
  }
  let slipped = app_learn_js_operator_solve(left, other, right);
  let whole = app_learn_js_expression_value(current);
  let candidates = [slipped, whole];
  ("2026-10-15, seen on screen: two pieces of text joined have no other operator's value, since text times text is not a value, so on its own a join was asked with one button. It is offered the wrong joins the lesson on joining two names offers");
  if (text_is(left) && text_is(right)) {
    let joins_wrong = app_learn_js_text_join_decoys(left, right);
    candidates = list_concat(candidates, joins_wrong);
  }
  function wrong_is(candidate) {
    "A misread symbol on two strings is not a value at all: \"a\" * \"b\" is NaN, which would show up as an answer nobody could have meant.";
    "2026-11-22: compared by what is written out, not by being the same thing, so an array equal to the answer, as a whole line's [7, 2] is to its last step's, is dropped like an equal number";
    let differs = json_equal_not(candidate, value);
    let b = number_nan_is(candidate);
    let number = not(b);
    let r = differs && number;
    return r;
  }
  let wrong = list_filter(candidates, wrong_is);
  let decoys = list_unique(wrong);
  return decoys;
}
