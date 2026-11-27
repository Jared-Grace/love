import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_input_twice() {
  arguments_assert(arguments, 0);
  ('the second inputs lesson: greet called twice with two names, greet("Mary"); greet("John");, writes out a greeting for each, since each call gives name the value written in it');
  ("2026-11-27, at the human's asking: after Give it an input, the same function called twice with different names, so the learner sees the note above the function's line go when the first call ends and come back holding the second name");
  ("A set is four questions, each pair once, shuffled. Reading backwards, the wrong program calls with the two names the other way round, so only the order of the calls tells the two apart. The wrong output is the first name greeted twice, for a learner who thinks name keeps the value of the first call.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let pairs = [
    ["Mary", "John"],
    ["Ruth", "Peter"],
    ["John", "Ruth"],
    ["Peter", "Mary"],
  ];
  function greeting(name) {
    let r = "Greetings, " + name + "!";
    return r;
  }
  function program_with(first, second) {
    "greet declared with the parameter name, then called with first and then with second";
    let lines = [
      "function greet(name) {",
      '  console.log("Greetings, " + name + "!");',
      "}",
      "greet(" + json_to(first) + ");",
      "greet(" + json_to(second) + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair) {
    let first = list_get(pair, 0);
    let second = list_get(pair, 1);
    let code = program_with(first, second);
    return code;
  }
  function wrong_programs_of(pair) {
    "the two calls the other way round";
    let first2 = list_get(pair, 0);
    let second2 = list_get(pair, 1);
    let v = program_with(second2, first2);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(pair) {
    "the first name greeted twice, as if name kept the first call's value";
    let first3 = list_get(pair, 0);
    let once = greeting(first3);
    let joined = list_join_newline([once, once]);
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
    "each call gives the parameter the value written in that call";
    let box = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box, [
      "In ",
      'greet("Mary");',
      " the parameter ",
      "name",
      " is given the value ",
      '"Mary"',
    ]);
    app_learn_js_div_cycle_code(box, [
      "In ",
      'greet("John");',
      " the parameter ",
      "name",
      " is given the value ",
      '"John"',
    ]);
    app_learn_js_div_cycle_code(box, [
      "So the same body writes out a different greeting each time",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_program, ["Here is the complete program:"]);
    let code = program_with("Mary", "John");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A new input each call",
    'greet("Mary"); greet("John");',
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
