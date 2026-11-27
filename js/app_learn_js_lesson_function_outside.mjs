import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_function_declared_lines } from "./app_learn_js_function_declared_lines.mjs";
import { less_than } from "./less_than.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_outside() {
  arguments_assert(arguments, 0);
  ("a function whose body changes a variable declared outside it: let count = 0; function count_increase() { count += 2; } called twice, then count written out, so each call adds again");
  ("2026-11-27, at the human's asking, with the program the human gave: the sixth of the function body lessons");
  ("An input is the amount added. Reading backwards, the wrong program calls count_increase once; the wrong outputs are the amount (one call counted) and 0 (for a learner who thinks a function cannot change a variable outside it).");
  ("The writing is a first draft by Claude 2026-11-27.");
  let amounts = [2, 3, 5, 10];
  function program_with(amount, calls) {
    "count starting at 0, count_increase adding amount to it, called calls times, then count written out";
    let lines = [
      "let count = 0;",
      ...app_learn_js_function_declared_lines("count_increase", [
        "count += " + amount + ";",
      ]),
    ];
    for (let k = 0; less_than(k, calls); k++) {
      lines.push("count_increase();");
    }
    lines.push("console.log(count);");
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(amount) {
    let code = program_with(amount, 2);
    return code;
  }
  function wrong_programs_of(amount) {
    let v = program_with(amount, 1);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(amount) {
    "one call counted, and no change at all";
    let v2 = String(amount);
    let outputs = [v2, "0"];
    return outputs;
  }
  function inputs_get() {
    "each amount once, shuffled";
    let order = amounts.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "a body can change a variable declared outside it";
    let box = app_learn_js_container_light_blue(root);
    html_div_text(
      box,
      "A function's body can change a variable declared outside the function",
    );
    app_learn_js_div_cycle_code(box, [
      "Here each call of ",
      "count_increase();",
      " adds ",
      "1",
      " to ",
      "count",
      " again",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of(1);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Changing a variable outside",
    "count_increase();",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs_stepping(
    {
      name_id,
      above,
      inputs_get,
      program_of,
      wrong_programs_of,
      wrong_outputs_of,
    },
    true,
  );
  return lesson;
}
