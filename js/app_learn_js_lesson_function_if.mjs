import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_function_declared_lines } from "./app_learn_js_function_declared_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_if() {
  arguments_assert(arguments, 0);
  ("a function called inside an if: its body runs only when that branch runs, so greet writes Good morning only when hour is under 12");
  ("2026-11-27, at the human's asking: calls inside if and else come before calls inside a loop, since ifs come before loops in the course and an if runs once");
  ("The subject is the hour, not age: the human first suggested age, and saying bye to anyone under 18 reads as turning young learners away. Not picked: a true/false like raining, less familiar here than < with numbers; a score passing or failing, the same turned-away feel as age.");
  ("An input is the hour. Reading backwards, the wrong program calls greet before the if, as well as inside it; the wrong outputs are both lines, for a learner who thinks greet runs anyway, and the other branch's line.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let hours = [7, 10, 15, 20];
  let morning = "Good morning";
  let evening = "Good evening";
  function program_with(hour, called_first) {
    "greet declared writing Good morning, hour set, then greet called only when hour is under 12, Good evening written out otherwise; greet also called before the if when called_first";
    let lines = [
      ...app_learn_js_function_declared_lines("greet", [
        'console.log("' + morning + '");',
      ]),
      "let hour = " + hour + ";",
    ];
    if (called_first) {
      lines.push("greet();");
    }
    lines.push(
      "if (hour < 12) {",
      "  greet();",
      "} else {",
      '  console.log("' + evening + '");',
      "}",
    );
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(hour) {
    let code = program_with(hour, false);
    return code;
  }
  function wrong_programs_of(hour) {
    let v = program_with(hour, true);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(hour) {
    "both lines, as if greet ran anyway, and the other branch's line";
    let other = evening;
    if (!less_than(hour, 12)) {
      other = morning;
    }
    let outputs = [list_join_newline([morning, evening]), other];
    return outputs;
  }
  function inputs_get() {
    "each hour once, shuffled";
    let order = hours.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "a call inside an if runs only when that branch runs";
    let box = app_learn_js_container_light_blue(root);
    html_div_text(
      box,
      "A function can be called inside an if, like any other line",
    );
    app_learn_js_div_cycle_code(box, [
      "Here ",
      "greet();",
      " runs only when ",
      "hour < 12",
      " is ",
      "true",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of(9);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Called inside an if",
    "if",
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
