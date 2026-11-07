import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
export function app_code_lesson_for_comparison_other_above(
  lesson_earlier,
  earlier,
  options,
) {
  arguments_assert(arguments, 3);
  ("What sits above a for lesson that differs from an earlier for lesson only in its comparison: the earlier program remembered, then the same lines written with the other comparison, then every run walked through, then what the two comparisons do with the number they are compared with. earlier and options are what each lesson hands in, as ",
    fn_name("app_code_lesson_increment_log_options"),
    " does.");
  let name = "n";
  function above(root, context, example, walk) {
    let start2 = js_code_let_statement(name, earlier.start);
    let condition = js_code_binary_spaced_nb(
      name,
      earlier.comparison,
      earlier.bound,
    );
    let statement = js_code_console_log_statement(name);
    let code = js_code_update_statement(name, earlier.change);
    let earlier_lines = js_code_for_start_condition_update_lines(
      start2,
      condition,
      [statement, code],
    );
    let earlier_joined = list_join_newline(earlier_lines);
    let earlier_written = eval_console_log_lines(earlier_joined);
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, lesson_earlier, [
      "we can write this:",
    ]);
    app_learn_js_code_lines_writes_out(box_one, earlier_lines, earlier_written);
    let box_two = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "We can write it with ",
      options.comparison,
      ":",
    ]);
    example(box_two, js_code_for_start_condition_update_lines);
    app_code_div_cycle_code(box_two, ["These two loops do the same thing"]);
    walk(box_two);
    app_code_div_cycle_code(box_two, [
      "",
      earlier.comparison,
      " leaves out the number it is compared with, and ",
      options.comparison,
      " includes it",
    ]);
  }
  return above;
}
