import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_functions_console_log_arithmetic } from "./app_code_lesson_functions_console_log_arithmetic.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_log_double_generic } from "./app_code_lesson_log_double_generic.mjs";
export function app_code_lesson_while_log_double() {
  arguments_assert(arguments, 0);
  ("a while that writes out double n: let n = 1; while (n < 3) { console.log(n * 2); n++; } writes out 2 and 4");
  ("The one new fact is that a console.log inside a while can do math on n, and that the math does not change n: only n++ does.");
  ("Recommended by Claude 2026-11-03 and chosen by the human, to sit straight after Up to and including, so n++ is already known.");
  ("The writing is a first draft by Claude 2026-11-03.");
  let name = "n";
  let program_write = js_code_start_above_lines(js_code_while_lines_multiple);
  function above(root, context, example, walk) {
    "console.log with math remembered, then the same inside a while";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_functions_console_log_arithmetic,
      ["", "console.log", " does the math first, then writes out the answer."],
    );
    let box_two = app_code_container_light_blue(root);
    let times = js_operator_asterisk_symbol();
    let doubled = js_code_binary_spaced_nb(name, times, 2);
    app_code_div_cycle_code(box_two, [
      "",
      doubled,
      " is double ",
      name,
      ". It does not change ",
      name,
      "; only ",
      "n++",
      " does:",
    ]);
    example(box_two, program_write);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Writing out double",
    "console.log(n * 2);",
  );
  let lesson = app_code_lesson_log_double_generic({
    name_id,
    above,
    program_write,
  });
  return lesson;
}
