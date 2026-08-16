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
  function wrong_is(candidate) {
    let same = equal(candidate, value);
    let wrong = not(same);
    return wrong;
  }
  let wrong = list_filter(candidates, wrong_is);
  let decoys = list_unique(wrong);
  return decoys;
}
