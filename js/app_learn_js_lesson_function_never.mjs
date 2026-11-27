import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_function_declared_lines } from "./app_learn_js_function_declared_lines.mjs";
import { json_to } from "./json_to.mjs";
import { list_get } from "./list_get.mjs";
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
export function app_learn_js_lesson_function_never() {
  arguments_assert(arguments, 0);
  ("a function declared and never called: its body never runs, so only the console.log after it writes anything out");
  ("2026-11-27, at the human's asking: the third of the function body lessons");
  ("An input is a pair: the word inside greet, and the word written out after it. Reading backwards, the wrong program calls greet before the last line; the wrong output writes greet's word too, for a learner who thinks declaring a function runs it.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let pairs = [
    ["Hello", "Amen"],
    ["Peace", "Joy"],
    ["Welcome", "Thanks"],
    ["Good morning", "Good night"],
  ];
  function program_with(pair, called) {
    "greet declared, writing out the pair's first word; called first only when called is true; then the pair's second word written out";
    let object = list_get(pair, 0);
    let lines = app_learn_js_function_declared_lines("greet", [
      "console.log(" + json_to(object) + ");",
    ]);
    if (called) {
      lines.push("greet();");
    }
    let object2 = list_get(pair, 1);
    lines.push("console.log(" + json_to(object2) + ");");
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair) {
    let code = program_with(pair, false);
    return code;
  }
  function wrong_programs_of(pair) {
    let v = program_with(pair, true);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(pair) {
    "both words, as if declaring greet ran it";
    let joined = list_join_newline(pair);
    let outputs = [joined];
    return outputs;
  }
  function inputs_get() {
    "each pair once, shuffled";
    let order = pairs.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "declaring is not calling";
    let box = app_learn_js_container_light_blue(root);
    html_div_text(box, "Declaring a function does not run its body");
    html_div_text(box, "Its body runs only when the function is called");
    app_learn_js_div_cycle_code(box, [
      "Here ",
      "greet();",
      " is never written, so ",
      'console.log("Greetings!");',
      " never runs",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of(["Greetings!", "Amen"]);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Never called, never run",
    "function greet()",
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
