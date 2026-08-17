import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
import { app_code_expression_flat_random_strong_first } from "./app_code_expression_flat_random_strong_first.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_three_intro } from "./app_code_lesson_expression_choose_order_three_intro.mjs";
import { app_code_lesson_expression_choose_order_three_operator_count } from "./app_code_lesson_expression_choose_order_three_operator_count.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_range } from "./each_range.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order_three_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: which operators are the stronger ones put back in front of the learner, then one whole line of this lesson's own kind taken all the way down, then the one sentence saying what is different here");
  ("The same three-part shape as the lessons on either side of it - recall, run, hinge - because a learner arriving here has read that shape on the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on this screen is how far the line goes.");
  ("The run is walked by the same reading the learner is about to be asked for rather than by a telling written out beside it: at each turn the line is asked which of its parts has a number on each side, and the answer is the part the sentence names. A run written by hand could say a step the line does not take.");
  ("Every step says the same thing in the same words, because they ARE the same step - that is the whole point being made. A step worded three different ways would read as three rules where the lesson is showing one rule holding three times.");
  let times = js_operator_asterisk_symbol();
  let divide = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let recall_card = app_code_container_light_blue(root);
  html_div_cycle_code(recall_card, [
    "Remember: ",
    times,
    " and ",
    divide,
    " are worked out before ",
    plus,
    " and ",
    minus,
  ]);
  let count = app_code_lesson_expression_choose_order_three_operator_count();
  let tree = app_code_expression_flat_random_strong_first(count);
  let whole_line = app_code_expression_code(tree);
  let line_card = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(line_card, "Suppose", whole_line);
  let run = app_code_container_light_blue(root);
  let current = tree;
  function step_show(index_unused) {
    "one step of the run: the part that may go, what it comes to, and what the line is left as";
    let ready = app_code_expression_nodes_ready(current);
    let node = list_first(ready);
    let step_code = app_code_expression_code(node);
    let step_value = app_code_expression_value(node);
    let step_text = text_to(step_value);
    let solved = app_code_expression_equals_text(step_code, step_text);
    html_div_cycle_code(run, [
      "Only ",
      step_code,
      " has a number on each side, and ",
      solved,
    ]);
    current = app_code_expression_solved(current, node);
    let left_over = app_code_expression_nodes_ready(current);
    let current_code = app_code_expression_code(current);
    let done = list_empty_is(left_over);
    if (done) {
      html_div_cycle_code(run, [
        "Nothing is left inside it, so the whole line is ",
        current_code,
      ]);
      return;
    }
    html_div_cycle_code(run, ["That leaves ", current_code]);
  }
  each_range(count, step_show);
  let change_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_three_intro(change_card);
}
