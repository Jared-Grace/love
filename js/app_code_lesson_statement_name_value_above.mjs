import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_code_multiple } from "./html_div_code_multiple.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_statement_name_value_above(root) {
  arguments_assert(arguments, 1);
  ("the three boxes read before the first question: a name given a value, that same name handed to console.log, and two names of which only one is written out");
  ("Each number is written once and used both in the code and in the sentence beside it, so the two can never come apart.");
  let names = app_code_lesson_statement_name_value_names();
  let name_first = list_first(names);
  let name_second = list_second(names);
  let log_name = js_console_log_name();
  let held = text_to(3);
  let other = text_to(5);
  function held_of(name, value) {
    "the line that gives a value a name";
    let code = js_code_let_statement(name, value);
    return code;
  }
  let first_held = held_of(name_first, held);
  let first_logged = js_code_console_log_statement(name_first);
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, ["We can give a value a name"]);
  html_div_code(box, first_held);
  html_div_cycle_code(box, ["This gives the name ", name_first, " the value ", held]);
  html_div_cycle_code(box, ["Now writing ", name_first, " gives back ", held]);
  let box_logged = app_code_container_light_blue(root);
  html_div_cycle_code(box_logged, ["So we can put ", name_first, " inside ", log_name]);
  html_div_code_multiple(box_logged, [first_held, first_logged]);
  html_div_cycle_code(box_logged, ["This writes out ", held]);
  let box_two = app_code_container_light_blue(root);
  html_div_cycle_code(box_two, ["We can give more than one value a name"]);
  let second_held = held_of(name_second, other);
  let second_logged = js_code_console_log_statement(name_second);
  html_div_code_multiple(box_two, [first_held, second_held, second_logged]);
  html_div_cycle_code(box_two, ["Only the name inside ", log_name, " is written out"]);
  html_div_cycle_code(box_two, ["So this writes out ", other, ", not ", held]);
}
