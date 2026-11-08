import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_total } from "./app_code_lesson_while_total.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_total_step_generic } from "./app_learn_js_lesson_total_step_generic.mjs";
export function app_code_lesson_while_total_step() {
  arguments_assert(arguments, 0);
  ("a running total counting by more than one: let total = 0; let n = 1; while (n < 7) { total += n; n += 2; } console.log(total); writes out 9, which is 1 + 3 + 5");
  ("The one new fact is that n can go up by more than 1 each run, so which numbers are added up depends on where n starts and how big its step is: start at 1 and add 2 for the odd numbers, start at 2 for the even ones.");
  ("Asked for by the human 2026-10-27, as the lesson after A running total: sums of even numbers and of odd numbers, one lesson rather than two, because the two programs differ only in where n starts.");
  ("Steps of 3 are mixed in with steps of 2, so the step has to be read as well as the start; a lesson for threes alone would teach the same fact a second time. Picked 2026-10-27; the rejected readings were a separate lesson for threes and steps of 2 only.");
  ("The writing is a first draft by Claude 2026-10-27.");
  let name = "n";
  let total_name = "total";
  let program_write = js_code_start_above_lines(js_code_while_lines_multiple);
  function above_inner(root, context, example, walk) {
    "the running total remembered, then n counting by 2 from 1, adding 1 + 3 + 5, then where even numbers and threes come from";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_total,
      [
        "inside a ",
        "while",
        ", one name can count while another adds up: ",
        "total += n;",
        " adds each ",
        name,
        " to ",
        total_name,
        ".",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      name,
      " can count by more than 1. Here ",
      "n += 2;",
      " makes ",
      name,
      " count 1, 3, 5, so ",
      total_name,
      " adds up the odd numbers:",
    ]);
    example(box_two, program_write);
    walk(box_two);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Start ",
      name,
      " at 2 instead, and it counts 2, 4, 6: the even numbers. And ",
      "n += 3;",
      " counts by threes. So read where ",
      name,
      " starts and how much it goes up by.",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Counting by twos and threes",
    "n += 2;",
  );
  let lesson = app_learn_js_lesson_total_step_generic(
    program_write,
    above_inner,
    name_id,
  );
  return lesson;
}
