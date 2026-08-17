import { app_shared_hr_spaced } from "./app_shared_hr_spaced.mjs";
import { app_code_lesson_expression_choose_order_solve_intro } from "./app_code_lesson_expression_choose_order_solve_intro.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_replace_swap_say } from "./app_code_expression_replace_swap_say.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { app_code_operators_say } from "./app_code_operators_say.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order_solve_above(root) {
  arguments_assert(arguments, 1);
  ("what the learner already knows, said above the card: the word operator, and then a whole line of the same kind worked all the way through the way the lesson before them worked it");
  ("It stands above the card rather than inside it because it is the telling, and the card is the doing. A learner who has read it once goes on pressing inside the card, and what they read stays put above the thing it was about instead of being one more line at the top of the same box.");
  ("The word operator gets a card to itself. It is the one thing here that is not a step of the run - it is a word being handed over - and standing at the head of the run it read as the first of five things that happened.");
  ("A line of its own, built the same way the lesson's own lines are built and then worked out to the end, rather than the very line the learner is about to press. Worked out on their own line, every step of it is their line already solved for them and the buttons underneath would be asking for something they had just been told.");
  ("Every number in the telling comes from that one line - the two operators in the order they go, the piece that goes first, what that piece comes to, and what the whole line comes to. One line worked through is a run a learner can follow from top to bottom; numbers borrowed from nowhere in particular are four separate things to take on trust.");
  ("The times is on the right of it, for the reason the first question of the bank puts it there: the operator to choose is not the leftmost one, so a learner reading the run learns to read the operator rather than the position.");
  ("The steps are told in the past tense and of the learner - you chose, you saw, you replaced - because they are not being taught here. They happened, on the screen before this one, and what they are doing in this lesson is holding the place the change goes into.");
  let definition_card = app_code_container_light_blue(root);
  app_code_operators_say(definition_card);
  let strong_right = true;
  let tree = app_code_lesson_expression_choose_order_expression(strong_right);
  let whole_line = app_code_expression_code(tree);
  let ready = app_code_expression_nodes_ready(tree);
  let step = list_first(ready);
  let first_symbol = property_get(step, "operator");
  let next_symbol = property_get(tree, "operator");
  let step_code = app_code_expression_code(step);
  let step_value = app_code_expression_value(step);
  let step_text = text_to(step_value);
  let final_value = app_code_expression_value(tree);
  let final_text = text_to(final_value);
  let recap = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(recap, "Suppose", whole_line);
  html_div_cycle_code(recap, [
    "Before, you chose each operator in order (",
    first_symbol,
    ", then ",
    next_symbol,
    ")",
  ]);
  let solved = app_code_expression_equals_text(step_code, step_text);
  html_div_cycle_code(recap, [
    "Then you saw what that operator would be replaced with (like ",
    solved,
    ")",
  ]);
  ("the swap is said in the very words the button that made it said, out of the one place both of them read, so the learner is told about the press they made in the words they made it in - and the word for the swap and its two pieces all wear the colour they wore on the line");
  let swap_line = html_div(recap);
  app_code_expression_replace_swap_say(
    swap_line,
    "Then you ",
    "replaced",
    step_code,
    step_text,
  );
  html_div_cycle_code(recap, [
    "You did this until there were no more operators left (so the final value was ",
    final_text,
    ")",
  ]);
  ("A line drawn right across before the last sentence, for the reason it is drawn in the lesson before: what is above it is the run the learner already knows, and what is below it is the one thing this lesson changes about that run.");
  ("It is said here rather than on the card because it only means anything beside the run it changes. On the card it stood alone, a step away from the four steps it names, and a learner reading it there had to carry the run back down to it from above.");
  app_shared_hr_spaced(recap);
  app_code_lesson_expression_choose_order_solve_intro(recap);
}
