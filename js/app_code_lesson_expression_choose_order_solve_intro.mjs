import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_say } from "./app_code_operators_say.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { app_shared_hr_spaced } from "./app_shared_hr_spaced.mjs";
export function app_code_lesson_expression_choose_order_solve_intro(
  parent,
  whole_line,
  first_symbol,
  next_symbol,
) {
  arguments_assert(arguments, 4);
  ("what this lesson is for, said of the very line the learner is about to press: the word operator, the line, what the lesson before it had them do with such a line, and then the one thing that is different now");
  ("It opens by telling the run again rather than by announcing the new thing, because the new thing is one word changed in a run of four steps the learner already knows. Said cold it is a new lesson; said after the run it is the third step of the run being handed over to them.");
  ("The steps are told in the past tense and of the learner - you chose, you saw, you replaced - because they are not being taught here. They happened, on the screen before this one, and what they are doing in this lesson is holding the place the change goes into.");
  ("Only the order of the two operators is taken from the line above. Everything with a number in it is said of a small line of its own, so nothing here is a piece of the learner's own line already worked out for them - which would leave the buttons underneath asking for something they had just been told.");
  ("That small line is deliberately unlike anything this lesson prints: a taking away, which no line here holds, and a value above ninety, which no step of any line here can come to. So it can be read neither as part of the line above it nor as one of the values about to be offered underneath.");
  ("A line drawn right across before the last sentence, for the reason it is drawn in the lesson before: what is above it is the telling, and what is below it is this lesson starting.");
  app_code_operators_say(parent);
  app_code_lesson_suppose_solve_line(parent, "Suppose", whole_line);
  html_div_cycle_code(parent, [
    "Before, you chose each operator in order (",
    first_symbol,
    ", then ",
    next_symbol,
    ")",
  ]);
  let aside_whole = "100 - 4";
  let aside_value = "96";
  let aside_solved = text_combine_3(aside_whole, " === ", aside_value);
  html_div_cycle_code(parent, [
    "Then you saw what that operator would be replaced with (like ",
    aside_solved,
    ")",
  ]);
  html_div_cycle_code(parent, [
    "Then you replaced the operator with its replaced value (like ",
    aside_whole,
    " was replaced with ",
    aside_value,
    ")",
  ]);
  html_div_cycle_code(parent, [
    "You did this until there were no more operators left (so the final value could be ",
    aside_value,
    ")",
  ]);
  app_shared_hr_spaced(parent);
  html_div_cycle_code(parent, [
    "Now, instead of being given the replaced value, you will choose the correct value for the operator",
  ]);
}
