import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_operator_truths_wanted_nested(
  alone_symbol,
  gathered_symbol,
  want_true,
  gathered_left,
) {
  arguments_assert(arguments, 4);
  ("The three trues and falses of a two-operator line, in the order they are read, chosen from the outside in so the line comes to what was wanted.");
  ("Both lessons that build such a line said this the same way and neither said it by name. What the whole line has to come to says what the outer operator needs on each side of it; what it needs on the gathered side says what the inner operator has to come to; and that says what stands either side of the inner one. So neither operator is ever asked what it means - each is asked which pairs reach the answer wanted, which is the reading the lessons exist to teach.");
  ("The outer operator is the one standing alone, because the gathered pair is solved first and arrives at the outer one as a single answer. That is why only the two symbols are handed in and nothing is told which is outer: being gathered is what makes an operator inner.");
  ("Which side the pair is gathered on moves from line to line, and it is handed in rather than settled here, because the lessons drawing on this cannot move it the same way. Answered in the order read, a caller can hand the three straight to the shape it is building without knowing which side gathered.");
  let outer = app_code_operator_truths_wanted(alone_symbol, want_true);
  if (gathered_left) {
    let gathered_value = list_get(outer, 0);
    let alone_truth = list_get(outer, 1);
    let inner = app_code_operator_truths_wanted(
      gathered_symbol,
      gathered_value,
    );
    let first_truth = list_get(inner, 0);
    let second_truth = list_get(inner, 1);
    let truths_left = [first_truth, second_truth, alone_truth];
    return truths_left;
  }
  ("2026-10-17, at the human's asking: the side standing alone may be any value the outer answer allows, false before && among them, because the lessons solve both sides before an && or an || - a beginner's rule that comes to JavaScript's answer on every line drawn here - so the pair in the parentheses always runs. Not picked: giving the alone side only the value that does not settle the line, built earlier the same day while the lessons followed JavaScript in skipping; it kept the pair from being skipped, but by leaving out every line that starts false &&");
  let alone_truth_right = list_get(outer, 0);
  let gathered_value_right = list_get(outer, 1);
  let inner_right = app_code_operator_truths_wanted(
    gathered_symbol,
    gathered_value_right,
  );
  let first_truth_right = list_get(inner_right, 0);
  let second_truth_right = list_get(inner_right, 1);
  let truths_right = [alone_truth_right, first_truth_right, second_truth_right];
  return truths_right;
}
