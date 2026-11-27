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
export function app_learn_js_lesson_function_loop() {
  arguments_assert(arguments, 0);
  ("a function called inside a for loop: the body runs once for each time round the loop, so greet's word comes out that many times");
  ("2026-11-27, at the human's asking: the seventh and last of the function body lessons");
  ("An input is a pair: greet's word and how many times the loop goes round, 2 or 3. Reading backwards, the wrong program calls greet once with no loop; the wrong output is the word once, for a learner who thinks a function runs only the first time.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let pairs = [
    ["Hello", 2],
    ["Peace", 3],
    ["Welcome", 2],
    ["Good morning", 3],
  ];
  function declared(pair) {
    let object = list_get(pair, 0);
    let lines = app_learn_js_function_declared_lines("greet", [
      "console.log(" + json_to(object) + ");",
    ]);
    return lines;
  }
  function program_of(pair) {
    "greet declared, then called inside a loop going round the pair's count of times";
    let lines = [
      ...declared(pair),
      "for (let i = 0; i < " + list_get(pair, 1) + "; i++) {",
      "  greet();",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function wrong_programs_of(pair) {
    let lines = [...declared(pair), "greet();"];
    let joined = list_join_newline(lines);
    let programs = [joined];
    return programs;
  }
  function wrong_outputs_of(pair) {
    "the word written once";
    let item = list_get(pair, 0);
    let outputs = [item];
    return outputs;
  }
  function inputs_get() {
    "each pair once, shuffled";
    let order = pairs.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "a call inside a loop runs each time round";
    let box = app_learn_js_container_light_blue(root);
    html_div_text(
      box,
      "A function can be called inside a loop, like any other line",
    );
    app_learn_js_div_cycle_code(box, [
      "Each time round the loop, ",
      "greet();",
      " runs, so the body of ",
      "greet",
      " runs again",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of(["Greetings!", 2]);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Called in a loop",
    "for",
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
