import { app_code_lesson_expression_comparing_a_comparison_line } from "./app_code_lesson_expression_comparing_a_comparison_line.mjs";
import { app_code_lesson_expression_comparing_a_comparison_suppose_line } from "./app_code_lesson_expression_comparing_a_comparison_suppose_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_comparing_a_comparison_worked_example(
  root,
  lead,
  code,
  value,
  operator,
  right_value,
) {
  arguments_assert(arguments, 6);
  ("one line walked through a replacement at a time: the line we start with, the comparison being swapped for its answer, what that leaves, what that comes to, and the whole line's answer");
  ("The first line POSES the line rather than concluding it. It used to open So for 3 === 5 === false, and a learner stopped there: everything said until that point had been about 3 === 5 on its own, and So promised that this longer line followed from it, when in truth a new line had just walked on. Suppose we want to solve names it for what it is - here is a line, and we are about to solve it - so the four lines under it read as the answer to a question that was asked");
  ("Suppose we and solve are both the track's own words rather than a new way of talking: lessons open Suppose we have two numbers and Suppose we swap the two numbers, and solve is the childhood math word every lesson that names the act uses, decided back in the arithmetic-both-sides lesson");
  ("The opening line is the same one the screen already opened with, word for word. That is a return rather than a repetition: the rule and its reason stand between the two, and the second says which line all of that was for, so the four lines under it have something to be about. Saying it a new way instead would read as a second line to work out");
  ("Five lines rather than one because the move this lesson teaches happens in the middle - the comparison is gone and its answer is sitting where it stood. A line that jumped straight to the final true or false would hide the only new step in the lesson, and the learner would have to take the answer on trust");
  ("The last two lines are worked out by the operator's own function rather than typed, so the example cannot say something the code would not do");
  let card = app_code_container_light_blue(root);
  let answer = js_true_false_word(value);
  let symbol = property_get(operator, "operator");
  let right_code = js_true_false_word(right_value);
  let whole = app_code_lesson_expression_comparing_a_comparison_line(
    code,
    operator,
    right_value,
  );
  let stood_in = text_combine_multiple([answer, " ", symbol, " ", right_code]);
  let fn = property_get(operator, "fn");
  let ended = fn(value, right_value);
  let ended_code = js_true_false_word(ended);
  app_code_lesson_expression_comparing_a_comparison_suppose_line(
    card,
    lead,
    whole,
  );
  html_div_cycle_code(card, ["We replace the ", code, " with ", answer]);
  html_div_cycle_code(card, ["And then we have ", stood_in]);
  html_div_cycle_code(card, ["And ", stood_in, " is ", ended_code]);
  html_div_cycle_code(card, ["So ", whole, " is ", ended_code]);
}
