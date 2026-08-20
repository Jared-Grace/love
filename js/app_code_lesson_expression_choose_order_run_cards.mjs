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
export function app_code_lesson_expression_choose_order_run_cards(
  root,
  heading,
  tree,
  step_sides,
) {
  arguments_assert(arguments, 4);
  ("one line walked all the way down to its value: the line named first, then every step it takes, one to a row");
  ("Held apart from the screen it usually stands on, because a lesson may want to walk two lines rather than one while everything around them - what to remember first, and what is new - is said once for both. Written inside that screen, a second walk could only be had by writing the whole screen out twice.");
  ("The run is walked by the same reading the learner is about to be asked for rather than by a telling written out beside it: at each turn the line is asked which of its parts has a value on each side, and the answer is the part the sentence names. A run written by hand could say a step the line does not take.");
  ("Every step says the same thing in the same words, because they ARE the same step - that is the whole point being made. A step worded three different ways would read as three rules where the lesson is showing one rule holding as many times as the line is long.");
  ("The run stops when the line has no operator left that may go, rather than after a counted number of steps. The line itself is what says how many steps it takes, so nothing has to be handed in beside it and nothing can be handed in that disagrees with it.");
  ("The heading is a row put above the line for a caller with something to say about this walk in particular rather than about the lesson. Handed nothing, no row is written, which is what every caller walking a single line asks for.");
  let heading_written = list_empty_not_is(heading);
  let line_card = app_code_container_light_blue(root);
  if (heading_written) {
    html_div_cycle_code(line_card, heading);
  }
  let whole_line = app_code_expression_code(tree);
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
}
