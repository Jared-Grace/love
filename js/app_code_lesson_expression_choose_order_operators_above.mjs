import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_replace_swap_say } from "./app_code_expression_replace_swap_say.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_operators_expression } from "./app_code_lesson_expression_choose_order_operators_expression.mjs";
import { app_code_lesson_expression_choose_order_operators_intro } from "./app_code_lesson_expression_choose_order_operators_intro.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order_operators_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: which operators are the stronger ones put back in front of the learner, then one whole line of this lesson's own kind worked all the way through, then the one sentence saying what is different here");
  ("The same three-part shape as the lessons on either side of it - recall, run, hinge - because a learner arriving here has read that shape on the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on this screen is which operators can turn up.");
  ("The recall names all four symbols in the two groups they fall into, because that pairing IS what the lesson is about. A learner who has only ever pressed times has had no reason to notice that times was being pressed for being strong rather than for being times, and this card is where the reason is said out loud before any line is read.");
  ("The stronger operator is put on the RIGHT of the line, for the reason the first question of the bank puts it there: the part that may be solved first is then not the leftmost thing on the line, so a learner following the run learns to read the operators rather than the position.");
  ("Every piece of the telling comes from that one line - which part cannot go yet, which part goes first, what it comes to, what is left, and what that comes to. Numbers borrowed from nowhere in particular would be five things to take on trust; one line worked from top to bottom is a run a learner can follow.");
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
  let strong_right = true;
  let tree =
    app_code_lesson_expression_choose_order_operators_expression(strong_right);
  let whole_line = app_code_expression_code(tree);
  let ready = app_code_expression_nodes_ready(tree);
  let step = list_first(ready);
  let step_code = app_code_expression_code(step);
  let step_value = app_code_expression_value(step);
  let step_text = text_to(step_value);
  let weak_symbol = property_get(tree, "operator");
  let strong_symbol = property_get(step, "operator");
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
    weak_symbol,
    " has ",
    step_code,
    " on one side, so it cannot be solved yet",
  ]);
  html_div_cycle_code(run, [
    "The ",
    strong_symbol,
    " is the stronger one and has a number on each side, so it goes first",
  ]);
  let solved = app_code_expression_equals_text(step_code, step_text);
  html_div_cycle_code(run, ["And ", solved]);
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
  app_code_lesson_expression_choose_order_operators_intro(change_card);
}
