import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_parentheses_expression } from "./app_code_lesson_expression_choose_order_parentheses_expression.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
export function app_code_lesson_expression_parentheses_or_value_expression(
  want_true,
  brackets_left,
) {
  arguments_assert(arguments, 2);
  ("a line for the lesson that asks what a bracketed || beside an && comes to, drawn so that the line coming to false is one the brackets change: false && (true || true), or (true || false) && false");
  ("The lesson is about a pair of marks, so a line that came to the same thing with them and without them is a line the marks did not have to be read on. Measured over every line the pressing lesson's maker can draw, four of sixteen were lines the brackets change, and they were one draw in ten. Nine questions in ten could be answered by reading past the marks, which is the lesson before this one, and a learner who has just done that lesson meets it again under a new title.");
  ("Only the false line is drawn this way, because the true line cannot be. A bracketed || gathered under an && can only ever make the line harder to reach true than the same words without the marks, so wherever the brackets change anything at all they change it to false. That is not a fact about the lines this maker happens to draw - it holds for all eight ways three trues and falses can fall, at either end - so a lesson wanting one line true and one false has no choice about which of the two carries the point.");
  ("The rule the false line is built to is one sentence at either end: the word standing OUTSIDE the brackets is false, and the word at the far end INSIDE them is true. The false beside the && is what makes the whole line false. Take the marks away and the || takes the line over, and the true at the far end is what it finds - so the same three words come to true, and a learner who read past the marks is wrong in front of themselves.");
  ("The word next to the && on the inside is left to the draw, because nothing about the point depends on it. Fixed either way the lesson would show two lines rather than four, and the pair inside the brackets would always read the same.");
  ("The true line is asked for from the pressing lesson's maker rather than drawn here, so the two lessons go on being one family of lines met twice, which is the thing that stops them looking merely alike. Only the half that carries the point is taken over.");
  if (want_true) {
    let tree_true =
      app_code_lesson_expression_choose_order_parentheses_expression(
        want_true,
        brackets_left,
      );
    return tree_true;
  }
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let middle_word = boolean_random();
  if (brackets_left) {
    ("the brackets at the left end: ( true || middle ) && false, which without them would read true || ( middle && false ) and come to true");
    let tree_left = app_code_expression_node_left_operator_first(
      true,
      or_symbol,
      middle_word,
      and_symbol,
      false,
    );
    return tree_left;
  }
  ("the brackets at the right end: false && ( middle || true ), which without them would read ( false && middle ) || true and come to true");
  let tree_right = app_code_expression_node_right_operator_first(
    false,
    and_symbol,
    middle_word,
    or_symbol,
    true,
  );
  return tree_right;
}
