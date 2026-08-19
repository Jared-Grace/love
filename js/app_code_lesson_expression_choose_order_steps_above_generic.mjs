import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
export function app_code_lesson_expression_choose_order_steps_above_generic(
  root,
  recall,
  tree,
  step_sides,
  intro,
) {
  arguments_assert(arguments, 5);
  ("what stands above the card on a lesson whose line is taken down one operator at a time: the thing to remember first, then the one line handed in walked all the way to its value, then the one sentence saying what is different here");
  ("The same three-part shape - recall, run, hinge - as every step-at-a-time lesson around it, because a learner arriving here has read that shape on the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on the screen is what the line is allowed to hold.");
  ("The run is walked by the same reading the learner is about to be asked for rather than by a telling written out beside it: at each turn the line is asked which of its parts has a value on each side, and the answer is the part the sentence names. A run written by hand could say a step the line does not take.");
  ("Every step says the same thing in the same words, because they ARE the same step - that is the whole point being made. A step worded three different ways would read as three rules where the lesson is showing one rule holding as many times as the line is long.");
  ("What a part needs on each side is handed in, because the shape cannot read it off the line: an arithmetic line wants a number there and a line of true and false wants one of those two. Everything else on the screen is the same telling, so naming the kind is what keeps one run serving both rather than a second copy being written to change one sentence.");
  ("The run stops when the line has no operator left that may go, rather than after a counted number of steps. The line itself is what says how many steps it takes, so nothing has to be handed in beside it and nothing can be handed in that disagrees with it.");
  recall(root);
  let whole_line = app_code_expression_code(tree);
  let line_card = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(line_card, "Suppose", whole_line);
  let run = app_code_container_light_blue(root);
  let current = tree;
  let ready = app_code_expression_nodes_ready(current);
  while (list_empty_not_is(ready)) {
    let node = list_first(ready);
    let step_code = app_code_expression_code(node);
    let step_value = app_code_expression_value(node);
    let step_text = text_to(step_value);
    let solved = app_code_expression_equals_text(step_code, step_text);
    html_div_cycle_code(run, ["Only ", step_code, step_sides, solved]);
    current = app_code_expression_solved(current, node);
    let current_code = app_code_expression_code(current);
    ready = app_code_expression_nodes_ready(current);
    let done = list_empty_is(ready);
    if (done) {
      html_div_cycle_code(run, [
        "Nothing is left inside it, so the whole line is ",
        current_code,
      ]);
    }
    if (not(done)) {
      html_div_cycle_code(run, ["That leaves ", current_code]);
    }
  }
  let change_card = app_code_container_light_blue(root);
  intro(change_card);
}
