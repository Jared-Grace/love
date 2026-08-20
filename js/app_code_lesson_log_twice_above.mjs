import { app_code_lesson_sum_lines } from "./app_code_lesson_sum_lines.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_log_twice_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the one line a learner already knows, that line with a second one under it, and then the same two lines the other way round");
  ("The second box is the first box with a line added and nothing else changed, so there is only one thing between them that could account for the extra answer. The learner reads the first answer again in the second card, which says the line they already knew went on doing exactly what it did.");
  ("The third box is the whole point of the second. Two lines that write out could have meant the two answers appear together in no particular order, and the only way to rule that out is to show the same two lines swapped and the answers swapped with them. Said in a sentence it would have to be believed; shown, it is read off the card.");
  ("The numbers here are in none of the programs the questions ask about - neither as something written nor as something worked out - so no number a learner meets on this screen turns up later as something to recognise rather than to read.");
  let lines = app_code_lesson_sum_lines();
  let box_one = app_code_container_light_blue(root);
  html_div_cycle_code(box_one, [
    "Remember, a line that writes out puts one answer on the screen",
  ]);
  let first_line = property_get(lines, "first_line");
  let first_total = property_get(lines, "first_total");
  app_code_code_lines_writes_out(box_one, [first_line], first_total);
  let box_two = app_code_container_light_blue(root);
  html_div_cycle_code(box_two, ["We can write a second line that writes out"]);
  let last_line = property_get(lines, "last_line");
  let last_total = property_get(lines, "last_total");
  let both = list_join_newline([first_total, last_total]);
  app_code_code_lines_writes_out(box_two, [first_line, last_line], both);
  html_div_cycle_code(box_two, ["Each answer is on its own line"]);
  let box_swapped = app_code_container_light_blue(root);
  html_div_cycle_code(box_swapped, ["If we swap the two lines"]);
  let swapped = list_join_newline([last_total, first_total]);
  app_code_code_lines_writes_out(box_swapped, [last_line, first_line], swapped);
  html_div_cycle_code(box_swapped, [
    "The answers come out in the order the lines are written",
  ]);
}
