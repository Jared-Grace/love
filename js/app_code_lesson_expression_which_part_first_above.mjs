import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_which_part_first_above(root) {
  arguments_assert(arguments, 1);
  ("the line, then the replacement that works, then the same line with the other replacement carried through to a different answer, then the rule");
  ("One line for both cards, not two. The wrong card is only worth reading beside the right one, and a second line would let a learner file the failure under that line rather than under the choice.");
  ("1 + 2 * 4 because the two parts differ in every way that matters to the reader: the numbers are all different, the two operators are different, and the two answers - 9 and 12 - are far enough apart that nobody can wonder whether they misread a digit.");
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let left = 1;
  let middle = 2;
  let right = 4;
  let left_text = text_to(left);
  let middle_text = text_to(middle);
  let right_text = text_to(right);
  let strong_part = app_code_operator_code(middle_text, times, right_text);
  let weak_part = app_code_operator_code(left_text, plus, middle_text);
  let whole = app_code_operator_code(left_text, plus, strong_part);
  let inner = multiply(middle, right);
  let inner_text = text_to(inner);
  let value = add(left, inner);
  let value_text = text_to(value);
  let stood_in = app_code_operator_code(left_text, plus, inner_text);
  let wrong_inner = add(left, middle);
  let wrong_inner_text = text_to(wrong_inner);
  let wrong_stood_in = app_code_operator_code(
    wrong_inner_text,
    times,
    right_text,
  );
  let wrong_value = multiply(wrong_inner, right);
  let wrong_value_text = text_to(wrong_value);
  let right_card = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(right_card, "Suppose", whole);
  html_div_cycle_code(right_card, [
    "Remember: the ",
    strong_part,
    " is solved first, to get ",
    inner_text,
  ]);
  html_div_cycle_code(right_card, [
    "Then we have ",
    stood_in,
    ", which is ",
    value_text,
  ]);
  html_div_cycle_code(right_card, [
    "Here we replaced the ",
    strong_part,
    " with ",
    inner_text,
    ", and that is valid",
  ]);
  let wrong_card = app_code_container_light_blue(root);
  ("The card opens on the question it is answering. Without it the first line is a bare fact about a part of the line nobody has been given a reason to look at, and a learner who has just been told the 2 * 4 is solved first has to guess why the 1 + 2 is suddenly being solved instead. Naming both parts is what makes it a choice rather than a change of subject.");
  ("A question, not the conclusion. The conclusion here is that this way is wrong, and stating that first leaves nothing to find out - the card would be watched rather than followed. The parentheses card that asks What if there were no ( and ) is the same move for the same reason.");
  html_div_cycle_code(wrong_card, [
    "What if we replaced the ",
    weak_part,
    " first instead of the ",
    strong_part,
    "?",
  ]);
  html_div_cycle_code(wrong_card, ["", weak_part, " is ", wrong_inner_text]);
  html_div_cycle_code(wrong_card, [
    "If we replace the ",
    weak_part,
    " with ",
    wrong_inner_text,
    ", then we have ",
    wrong_stood_in,
    ", which is ",
    wrong_value_text,
  ]);
  html_div_cycle_code(wrong_card, [
    "But ",
    whole,
    " is ",
    value_text,
    ", not ",
    wrong_value_text,
  ]);
  html_div_cycle_code(wrong_card, [
    "So here we cannot replace the ",
    weak_part,
    " first",
  ]);
  html_div_cycle_code(wrong_card, [
    "Instead we must replace the ",
    strong_part,
  ]);
  html_div_cycle_code(wrong_card, [
    "That is because ",
    times,
    " is done before ",
    plus,
  ]);
  let rule_card = app_code_container_light_blue(root);
  ("the rule closes the screen rather than opening it, the same way round as the lesson on comparing a comparison: a general sentence put first has nothing yet to attach to, while the same sentence at the end is a name for something already watched happening");
  html_div_cycle_code(rule_card, [
    "So, in general, replacements must honor order like ",
    times,
    " before ",
    plus,
  ]);
}
