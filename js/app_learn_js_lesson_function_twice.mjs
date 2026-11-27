import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_function_declared_lines } from "./app_learn_js_function_declared_lines.mjs";
import { json_to } from "./json_to.mjs";
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
export function app_learn_js_lesson_function_twice() {
  arguments_assert(arguments, 0);
  ("the second function lesson: a function called twice runs its body twice, so greet(); greet(); writes its word out two times");
  ("2026-11-27, at the human's asking: the second of the function body lessons - called twice, never called, called between two logs, two functions, a variable changed outside, called in a loop");
  ("A set is four questions, each word once, shuffled. Reading backwards, the wrong program calls greet once; the wrong output is the word written once, for a learner who thinks a function runs only the first time.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let words = ["Hello", "Peace", "Welcome", "Good morning"];
  function program_with(word, calls) {
    "greet declared, writing out word, then called calls times";
    let lines = app_learn_js_function_declared_lines("greet", [
      "console.log(" + json_to(word) + ");",
    ]);
    for (let k = 0; less_than(k, calls); k++) {
      lines.push("greet();");
    }
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word) {
    let code = program_with(word, 2);
    return code;
  }
  function wrong_programs_of(word) {
    let v = program_with(word, 1);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(word) {
    "the word written once";
    let outputs = [word];
    return outputs;
  }
  function inputs_get() {
    "each word once, shuffled";
    let order = words.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "each call runs the body again";
    let box = app_learn_js_container_light_blue(root);
    ("2026-11-27: body is now defined in bold in the lesson before, so here it is used plainly");
    html_div_text(box, "Each time a function is called, its body runs again");
    app_learn_js_div_cycle_code(box, [
      "Here ",
      "greet();",
      " is written twice, so ",
      "console.log(...)",
      " runs twice",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of("Greetings!");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Call it twice",
    "greet(); greet();",
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
