import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_replace_swap_say } from "./app_code_expression_replace_swap_say.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_compare_expression } from "./app_code_lesson_expression_choose_order_compare_expression.mjs";
import { app_code_lesson_expression_choose_order_compare_intro } from "./app_code_lesson_expression_choose_order_compare_intro.mjs";
import { app_code_lesson_expression_comparing_a_comparison_recall } from "./app_code_lesson_expression_comparing_a_comparison_recall.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order_compare_above(root) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("what stands above the card: the word comparison put back in front of the learner, then one whole line of this lesson's own kind worked all the way through, then the one sentence saying what is different here");
  ("The same three-part shape as the lesson before it - recall, run, hinge - because a learner arriving here has just read that shape on the screen behind them. A run laid out a second way would be read as a second thing to learn, when the only new thing on this screen is what the operators ARE.");
  ("The recall card is the one the comparison lessons already share, not a copy of it. This lesson leans on the word comparison in every line it draws, and a learner who met the word two lessons ago is owed it again; a second wording of it would leave the word taught twice, differently, on screens next door to each other.");
  ("The comparison is put on the RIGHT of the line, for the reason the first question of the bank puts it there: the part that may be solved first is then not the leftmost thing on the line, so a learner following the run learns to read the line rather than the position.");
  ("Every piece of the telling comes from that one line - which part cannot go yet, which part goes first, what it comes to, what is left, and what that comes to. Numbers borrowed from nowhere in particular would be five things to take on trust; one line worked from top to bottom is a run a learner can follow.");
  ("the recall makes its own card, so it is handed the root rather than a card to stand inside - a card within a card draws a second border around one line and reads as a note pinned to a screen rather than as one of its cards");
  app_code_lesson_expression_comparing_a_comparison_recall(root);
  let want_true = true;
  let comparison_left = false;
  let tree = app_code_lesson_expression_choose_order_compare_expression(
    want_true,
    comparison_left,
  );
  let whole_line = app_code_expression_code(tree);
  let ready = app_code_expression_nodes_ready(tree);
  let step = list_first(ready);
  let step_code = app_code_expression_code(step);
  let step_value = app_code_expression_value(step);
  let step_text = text_to(step_value);
  let outer_symbol = property_get(tree, "operator");
  let stepped = app_code_expression_solved(tree, step);
  let stepped_code = app_code_expression_code(stepped);
  let final_value = app_code_expression_value(tree);
  let final_text = text_to(final_value);
  ("The line stands in a card of its own, and so does the sentence at the end. Between them is the run: the line is not a step of it - it is what the run is done to - and the sentence is not a step either, it is what the next screen asks for.");
  let line_card = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(line_card, "Suppose", whole_line);
  let run = app_code_container_light_blue(root);
  html_div_cycle_code(run, [
    "The ",
    outer_symbol,
    " has ",
    step_code,
    " on one side, so it cannot be solved yet",
  ]);
  html_div_cycle_code(run, [
    "",
    step_code,
    " has a number on each side, so it goes first",
  ]);
  let solved = app_code_expression_equals_text(step_code, step_text);
  html_div_cycle_code(run, [
    "And a comparison comes to true or false, so ",
    solved,
  ]);
  ("the swap is said in the very words the button that makes it says, out of the one place both of them read, so the word for the swap and its two pieces wear the colour they wear on the line itself");
  let swap_line = html_div(run);
  app_code_expression_replace_swap_say(
    swap_line,
    "So we ",
    "replace",
    step_code,
    step_text,
  );
  html_div_cycle_code(run, [
    "That leaves ",
    stepped_code,
    ", and there is nothing left inside it, so the whole line is ",
    final_text,
  ]);
  let change_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_compare_intro(change_card);
}
