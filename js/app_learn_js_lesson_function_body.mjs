import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { list_first } from "./list_first.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_body() {
  arguments_assert(arguments, 0);
  ('the first function lesson: function greet() { console.log("Hello"); } greet(); writes out Hello, since the body of a function runs when the function is called');
  ("2026-11-26, at the human's asking: functions start with their body alone - no inputs, no return - so the one new idea is that a call runs the body. Inputs come next, then return.");
  ("A set is four questions, each word once, shuffled. The function is always greet, so only the word written out changes.");
  ("Reading backwards, the wrong program calls greet twice. The wrong output is the function's name, greet, for a learner who thinks the call writes out the name.");
  ("Stepping: the definition line declares greet and its body is skipped; the call line calls it, and the learner presses the function's line, then runs its body.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let words = ["Hello", "Peace", "Welcome", "Good morning"];
  function program_with(word, calls) {
    "greet declared, writing out word, then called calls times";
    let lines = [
      "function greet() {",
      "  console.log(" + json_to(word) + ");",
      "}",
    ];
    for (let k = 0; less_than(k, calls); k++) {
      lines.push("greet();");
    }
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word) {
    let code = program_with(word, 1);
    return code;
  }
  function wrong_programs_of(word) {
    let v = program_with(word, 2);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(word) {
    "the function's name, which no program here writes out";
    let outputs = ["greet"];
    return outputs;
  }
  function inputs_get() {
    "each word once, shuffled";
    let order = words.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "what a function is, and that a call runs its body";
    let box = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box, [
      "",
      "function greet() {",
      " declares a function named ",
      "greet",
      ". The lines inside its ",
      "{ }",
      " are its body.",
    ]);
    app_learn_js_div_cycle_code(box, [
      "The body does not run there. It runs when the function is called: ",
      "greet();",
      "",
    ]);
    let word = list_first(words);
    let code = program_of(word);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Call it to run it",
    "greet();",
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
