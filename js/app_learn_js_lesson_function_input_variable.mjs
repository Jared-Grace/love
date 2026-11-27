import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_input_variable() {
  arguments_assert(arguments, 0);
  ('the third inputs lesson: let who = "Mary"; greet(who); writes out Greetings, Mary!, since the name who in the call is solved first and the parameter is given its value');
  ("2026-11-27, at the human's asking: after A new input each call, a variable as the input, so the learner solves the name in the call first, as any name in a line is solved, and the parameter then gets its value");
  ("A set is four questions, each name once, shuffled. The variable is always who, so only the name in it changes.");
  ('Reading backwards, the wrong program calls greet("who"), for a learner who thinks the name itself goes in rather than its value. The wrong output is Greetings, who! for the same learner.');
  ("The writing is a first draft by Claude 2026-11-27.");
  let names = ["Mary", "John", "Ruth", "Peter"];
  function program_with(value, input) {
    "greet declared with the parameter name, who given value, then greet called with input written in the call";
    let lines = [
      "function greet(name) {",
      '  console.log("Greetings, " + name + "!");',
      "}",
      "let who = " + json_to(value) + ";",
      "greet(" + input + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(value2) {
    let code = program_with(value2, "who");
    return code;
  }
  function wrong_programs_of(value3) {
    "the word who written out as the input, so the greeting says who";
    let json = json_to("who");
    let v = program_with(value3, json);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(value4) {
    "the name of the variable greeted, as if the name itself went in";
    let outputs = ["Greetings, who!"];
    return outputs;
  }
  function inputs_get() {
    "each name once, shuffled";
    let order = names.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "the input in a call can be a variable, solved first, and the parameter is given its value";
    let box = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box, [
      "In ",
      "greet(who);",
      " the input is the variable ",
      "who",
    ]);
    app_learn_js_div_cycle_code(box, [
      "",
      "who",
      " is solved first, to ",
      '"Mary"',
    ]);
    app_learn_js_div_cycle_code(box, [
      "Then the parameter ",
      "name",
      " is given the value ",
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
    "A variable as the input",
    "greet(who);",
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
