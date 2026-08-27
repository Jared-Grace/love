import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_operator_symbols } from "./app_code_expression_operator_symbols.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_expression_step_reason } from "./app_code_expression_step_reason.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_expression_replace_swap_say } from "./app_code_expression_replace_swap_say.mjs";
export function app_code_lesson_expression_choose_order_compare_run(
  root,
  tree,
  lead,
) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 3);
  ("one line of this lesson's own kind worked all the way through: the line put up in a card of its own, then why the part that goes first is the one that goes first, what cannot go yet, the solving, the swap, and what is left");
  ("Written once and run twice, because the lesson asks about two shapes and a learner is owed a worked line of each. The screen used to work the bracketed shape only, and the rule it gave - what is inside parentheses is solved before what is outside - is about a mark that is not on the other shape at all, so half the questions arrived with nothing on the screen having said how to read them.");
  ("EVERY ROW BUT THE FIRST IS THE SAME IN BOTH RUNS, and that is the point of the second run rather than a cost of it. What changes between the two shapes is the reason the first part may go; a learner who read the second run laid out differently would take the difference in the wording for a difference in the doing.");
  ("The reason is read off the SHAPE rather than handed in, because the shape is what decides it. A comparison standing on the right of the outer operator is printed inside parentheses, so the parentheses are the reason and can be pointed at; standing on the left it is printed with none, and the ordinary rule for two operators is what decides. A caller telling the run which reason to give could tell it the wrong one about the line it was handed.");
  ("The ordinary rule is asked for rather than written out, out of the one place every lesson that takes a line down an operator at a time asks it - so the sentence the learner reads here is the sentence the quiz marks by, and it names the two operators that are actually on the line.");
  let list = app_code_expression_nodes_ready(tree);
  let step = list_first(list);
  let whole_line = app_code_expression_code(tree);
  let step_code = app_code_expression_code(step);
  let step_value = app_code_expression_value(step);
  let step_text = text_to(step_value);
  let outer_symbol = property_get(tree, "operator");
  let step_symbol = property_get(step, "operator");
  let stepped = app_code_expression_solved(tree, step);
  let stepped_code = app_code_expression_code(stepped);
  let final_value = app_code_expression_value(tree);
  let final_text = text_to(final_value);
  ("The line stands in a card of its own, and so does the run under it: the line is not a step of the run - it is what the run is done to.");
  let line_card = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(line_card, lead, whole_line);
  let run = app_code_container_light_blue(root);
  ("the reason is named FIRST and everything after it follows from it - because it is the whole of why this line has an order at all");
  ("It used to open with the outer operator having something on one side, so it could not be solved yet. That is true of the line and it is not the reason: a learner reads it as an order that comes from one part having something beside it, which is not a rule they can carry anywhere, and the real rule was never said at all. Worse, it left the two operators unexplained beside each other, so a learner had no way to tell whether it was the brackets or the operators that decided.");
  ("The brackets are drawn round the part as well as named, because the word and the mark have to be pinned to each other - this is the screen where a learner meets brackets as a REASON rather than as something they have merely seen.");
  let right = property_get(tree, "right");
  let bracketed = app_code_expression_node_is(right);
  let remaining = app_code_expression_operator_symbols(stepped);
  let others = list_unique(remaining);
  let reason = app_code_expression_step_reason(step_symbol, others);
  if (bracketed) {
    let step_gathered = text_wrap_parenthesis(step_code);
    reason = [
      "The ",
      step_gathered,
      " has parentheses, so what is inside them must be solved before what is outside",
    ];
  }
  html_div_cycle_code(run, reason);
  html_div_cycle_code(run, ["So we cannot solve the ", outer_symbol, " yet"]);
  html_div_cycle_code(run, ["We must solve the ", step_symbol, " first"]);
  ("said as the doing rather than as an equation, because the three lines above it are all about what may be done and this is the one that does it");
  html_div_cycle_code(run, ["We solve ", step_code, " to get ", step_text]);
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
    "Then all we have left is ",
    stepped_code,
    ", and that solves to ",
    final_text,
  ]);
}
