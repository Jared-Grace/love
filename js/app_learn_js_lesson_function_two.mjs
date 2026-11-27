import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_function_declared_lines } from "./app_learn_js_function_declared_lines.mjs";
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
export function app_learn_js_lesson_function_two() {
  arguments_assert(arguments, 0);
  ("two functions, hello declared first and bye second, called bye first: the words come out in the order the functions are called, not the order they are declared");
  ("2026-11-27, at the human's asking that one lesson declare two functions: the fifth of the function body lessons");
  ("An input is a pair: hello's word and bye's word. Reading backwards, the wrong program calls hello first; the wrong output is hello's word first, for a learner who thinks functions run in the order they are declared.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let pairs = [
    ["Hello", "Goodbye"],
    ["Hi", "Bye"],
    ["Welcome", "Farewell"],
    ["Good morning", "Good night"],
  ];
  function log_line(word) {
    let line = "console.log(" + json_to(word) + ");";
    return line;
  }
  function program_with(pair, calls) {
    "hello declared writing the pair's first word, bye declared writing its second, then the calls in the order given";
    let item = list_get(pair, 0);
    let v2 = log_line(item);
    let item2 = list_get(pair, 1);
    let v3 = log_line(item2);
    let lines = [
      ...app_learn_js_function_declared_lines("hello", [v2]),
      ...app_learn_js_function_declared_lines("bye", [v3]),
      ...calls,
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair) {
    let code = program_with(pair, ["bye();", "hello();"]);
    return code;
  }
  function wrong_programs_of(pair) {
    let v = program_with(pair, ["hello();", "bye();"]);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(pair) {
    "the words in the order the functions are declared";
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
    "the order of the calls decides";
    let box = app_learn_js_container_light_blue(root);
    html_div_text(box, "A program can declare more than one function");
    html_div_text(
      box,
      "Their bodies run in the order the functions are called, not the order they are declared",
    );
    app_learn_js_div_cycle_code(box, [
      "Here ",
      "hello",
      " is declared first, but ",
      "bye();",
      " is called first",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of(["Greetings!", "See you soon"]);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two functions",
    "bye(); hello();",
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
