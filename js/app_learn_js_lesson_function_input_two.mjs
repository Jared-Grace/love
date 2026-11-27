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
export function app_learn_js_lesson_function_input_two() {
  arguments_assert(arguments, 0);
  ('the fourth inputs lesson: function greet(name, town) called as greet("Paul", "Tarsus"); writes out Greetings, Paul of Tarsus!, since the inputs are given to the parameters in order, the first to the first and the second to the second');
  ("2026-11-27, at the human's asking: after A variable as the input, a function with two parameters, so the learner declares and assigns each in turn, each note a row of its own above the function's line");
  ("A set is four questions, each pair once, shuffled. Reading backwards, the wrong program writes the two inputs the other way round, so only their order tells the two apart. The wrong output is the same swap, Greetings, Tarsus of Paul!, for a learner who thinks the inputs are matched some other way than by order.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let pairs = [
    ["Paul", "Tarsus"],
    ["Mary", "Magdala"],
    ["Joseph", "Arimathea"],
    ["Simon", "Cyrene"],
  ];
  function greeting(name, town) {
    let r = "Greetings, " + name + " of " + town + "!";
    return r;
  }
  function program_with(first, second) {
    "greet declared with the parameters name and town, then called with first and second";
    let lines = [
      "function greet(name, town) {",
      '  console.log("Greetings, " + name + " of " + town + "!");',
      "}",
      "greet(" + json_to(first) + ", " + json_to(second) + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair) {
    let item = list_get(pair, 0);
    let item2 = list_get(pair, 1);
    let code = program_with(item, item2);
    return code;
  }
  function wrong_programs_of(pair) {
    "the two inputs the other way round";
    let item3 = list_get(pair, 1);
    let item4 = list_get(pair, 0);
    let v = program_with(item3, item4);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(pair) {
    "the two inputs given to the parameters the other way round";
    let item5 = list_get(pair, 1);
    let item6 = list_get(pair, 0);
    let swapped = greeting(item5, item6);
    let outputs = [swapped];
    return outputs;
  }
  function inputs_get() {
    "each pair once, shuffled";
    let order = pairs.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "a function can have more than one parameter, and the inputs are given to them in order";
    let box = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box, [
      "In ",
      "function greet(name, town)",
      " there are two parameters, ",
      "name",
      " and ",
      "town",
    ]);
    app_learn_js_div_cycle_code(box, [
      "In ",
      'greet("Paul", "Tarsus");',
      " the inputs are given to the parameters in order",
    ]);
    app_learn_js_div_cycle_code(box, [
      "The first, ",
      '"Paul"',
      ", goes to the first, ",
      "name",
    ]);
    app_learn_js_div_cycle_code(box, [
      "The second, ",
      '"Tarsus"',
      ", goes to the second, ",
      "town",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_program, ["Here is the complete program:"]);
    let code = program_with("Paul", "Tarsus");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two inputs",
    "greet(name, town)",
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
