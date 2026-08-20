import { app_code_expression_node_truths_wanted } from "./app_code_expression_node_truths_wanted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_choose_order_brackets_moved_expression(
  want_true,
  brackets_left,
) {
  arguments_assert(arguments, 2);
  ("a line holding an && and then an || with one pair of brackets round the first two words or round the last two, built as a shape so the quiz can work one operator out at a time: (false && true) || true, or false && (true || true)");
  ("The && stands before the || on every line, and only the brackets move. That is the whole of what this lesson asks: two lines that read the same words in the same order, where the one thing that differs is where the pair of marks sits, so the answer can only come from reading them.");
  ("Round the last two the brackets turn the order over, and round the first two they change nothing, because the && was going to gather its sides first anyway. Both are printed, and the second is the point as much as the first - a learner meeting only brackets that change something would go on to read every pair as a warning.");
  ("The trues and falses are chosen from the outside in, the same way the rest of this run chooses them. What the whole line has to come to says what the outer operator needs on each side of it, and what it needs on the gathered side says what the inner one has to come to. So neither operator is asked what it means - each is asked which pairs reach the answer wanted.");
  ("Where the brackets go is handed in rather than settled here, so the lesson drawing on this maker decides how it moves them. It has to move, however it is decided: left always at one end, the answer would sit at a fixed place on the line and a learner could press it right every time without reading a mark.");
  ("Nothing here branches on where the brackets fall, because on this lesson's line nothing else moves with them: the && is read first and the || second at both ends, and the side is the only thing handed on. Round the first two the brackets gather the && , which the line would have done on its own; round the last two they gather the || , which the line would otherwise have left until last.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let tree = app_code_expression_node_truths_wanted(
    and_symbol,
    or_symbol,
    want_true,
    brackets_left,
    true,
  );
  return tree;
}
