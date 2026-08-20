import { ternary } from "./ternary.mjs";
import { app_code_expression_node_truths_wanted } from "./app_code_expression_node_truths_wanted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_choose_order_brackets_expression(
  want_true,
  brackets_left,
) {
  arguments_assert(arguments, 2);
  ("a line with a bracketed || on one side of an && , built as a shape so the quiz can work one operator out at a time: false && (true || true), or (true || false) && true");
  ("The three trues and falses are chosen from the outside in, the same way the lesson before it chooses them. What the whole line has to come to says what the && needs on each side of it, and what the && needs on the bracketed side says what the || has to come to, which in turn says what stands either side of the ||. So neither operator is asked what it means - each is asked which pairs reach the answer wanted.");
  ("The || is the one inside the brackets rather than the && , because that is the pairing where the brackets change something. An && in brackets beside a || would print with its brackets and be solved first either way, so a learner could read past the brackets and still be right every time.");
  ("Which side the brackets fall on is handed in rather than settled here, and it has to move from line to line however it is settled. Left always on the same side, the answer would be at a fixed place on the line and a learner could press it right every time by position - which is exactly the reading this lesson exists to replace.");
  ("It is handed in because the two lessons drawing on this maker cannot move it the same way. One asks which operator goes first, and the answer to that is the bracketed one whatever the line comes to, so the side may simply take turns. The other asks what the line comes to, so a side taking turns beside an answer taking turns would hand a learner a rule pairing the two, and it draws instead.");
  ("The line prints with brackets in it and nothing here writes them: || is weaker than && , so a || standing beside an && can only mean what it says with brackets round it, and the helper that prints the line reads that off the shape. Written by hand they could disagree with the shape, and the line a learner presses would be a different line from the one being solved.");
  ("The || is always the gathered one and the && always the one left standing alone, so the side the brackets fall on is the only thing that moves - and what it moves is which of the two is read first. Bracketed on the left the || is read first and what it comes to is what the && finds on its left; bracketed on the right the && is read first and the || comes after it.");
  ("The brackets are not written here. They are left to the printer, which writes a pair only where it changes something - and on this lesson's line it always does, because a || standing beside an && could not otherwise mean what it says.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let first_symbol = ternary(brackets_left, or_symbol, and_symbol);
  let second_symbol = ternary(brackets_left, and_symbol, or_symbol);
  let tree = app_code_expression_node_truths_wanted(
    first_symbol,
    second_symbol,
    want_true,
    brackets_left,
    false,
  );
  return tree;
}
