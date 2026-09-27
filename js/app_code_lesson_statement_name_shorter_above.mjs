import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_code_lines_writes_out_watched } from "./app_code_code_lines_writes_out_watched.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_shorter_above(
  root,
  context,
  lesson_from,
  remembered,
  lines_long,
  long,
  short,
) {
  "$plain remembered";
  "$plain long";
  "$plain short";
  arguments_assert(arguments, 7);
  ("the boxes read before the first question of a lesson on a shorter way to write a line: the line as an earlier lesson taught it, in a whole program beside what it writes out, and then the same program with that line written the short way, writing out the same");
  ("THE SAME PROGRAM TWICE, with one line changed, so the same output under both is the claim that the two lines do the same thing. Said in words alone, a learner would have to take it on trust; drawn, they can check it.");
  ("The short line is never called a new thing, only a shorter way to write one they already know, because that is all it is - and a learner told so has one fact to learn rather than a new kind of line.");
  ("Two lines then say it outright: the two do exactly the same thing, and the short one is shorter and easier to type - the reason anyone would write it - at the human's request, 2026-09-27.");
  let box_long = app_code_container_light_blue(root);
  app_code_remember_from_lesson(box_long, context, lesson_from, remembered);
  app_code_code_lines_writes_out_watched(box_long, lines_long);
  let box_short = app_code_container_light_blue(root);
  html_div_cycle_code(box_short, [
    "A shorter way to write ",
    long,
    " is ",
    short,
    ".",
  ]);
  html_div_cycle_code(box_short, [
    "",
    long,
    " and ",
    short,
    " do exactly the same thing.",
  ]);
  html_div_cycle_code(box_short, ["", short, " is shorter and easier to type:"]);
  function line_shortened(line) {
    "the line itself, or the short way of writing it where it is the long one";
    let is_long = equal(line, long);
    let shortened = ternary(is_long, short, line);
    return shortened;
  }
  let lines_short = list_map(lines_long, line_shortened);
  app_code_code_lines_writes_out_watched(box_short, lines_short);
}
