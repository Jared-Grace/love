import { modulo } from "./modulo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { app_learn_js_cycle_code } from "./app_learn_js_cycle_code.mjs";
import { app_learn_js_definition_term } from "./app_learn_js_definition_term.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_input() {
  arguments_assert(arguments, 0);
  ('the first inputs lesson: function greet(name) { console.log("Greetings, " + name + "!"); } greet("Mary"); writes out Greetings, Mary!, since the call gives the parameter name the value written in it');
  ("2026-11-27, at the human's asking: inputs come after the function body lessons and before return. Stepping, the function's own line, pressed as the function called, declares name and assigns it the value from the call, as a let line does, the note going above the function's line; once the body's last line is complete the note goes, since name holds nothing outside the call. The human chose Greetings, ...! over Hi");
  ("A set is four questions, each name once, shuffled. Reading backwards, the wrong program calls greet with the next name in the list, so only the value in the call tells the two apart. The wrong output is Greetings, name!, for a learner who reads the parameter as its own spelling.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let names = ["Mary", "John", "Ruth", "Peter"];
  function program_of(name) {
    "greet declared with the parameter name, then called with name";
    "written out here rather than by the shared function-lines helper, which writes a function taking nothing";
    let lines = [
      "function greet(name) {",
      '  console.log("Greetings, " + name + "!");',
      "}",
      "greet(" + json_to(name) + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function wrong_programs_of(name) {
    "greet called with the next name in the list";
    let index = list_index_of(names, name);
    let right = list_size(names);
    let index2 = modulo(index + 1, right);
    let next = list_get(names, index2);
    let v = program_of(next);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(name) {
    "the parameter read as its own spelling";
    let outputs = ["Greetings, name!"];
    return outputs;
  }
  function inputs_get() {
    "each name once, shuffled";
    let order = names.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "what a parameter is, and that a call gives it the value written in the call";
    let box = app_learn_js_container_light_blue(root);
    let param_line = html_div(box);
    app_learn_js_cycle_code(param_line, [
      "In ",
      "function greet(name)",
      " the ",
      "name",
      " is a ",
    ]);
    app_learn_js_definition_term(param_line, "parameter");
    app_learn_js_div_cycle_code(box, [
      "In ",
      'greet("Mary");',
      " the parameter ",
      "name",
      " is given the value ",
      '"Mary"',
    ]);
    app_learn_js_div_cycle_code(box, [
      "Then the body runs, and there ",
      "name",
      " holds ",
      '"Mary"',
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_program, ["Here is the complete program:"]);
    let code = program_of("Mary");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Give it an input",
    "greet(name)",
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
