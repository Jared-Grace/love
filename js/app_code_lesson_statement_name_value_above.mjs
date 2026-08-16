import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_code_multiple } from "./html_div_code_multiple.mjs";
export function app_code_lesson_statement_name_value_above(
  root,
  held_of,
  name_a,
  log_name,
  log_of,
  name_b,
) {
  arguments_assert(arguments, 6);
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, ["We can give a value a name"]);
  let code = held_of(name_a, 3);
  html_div_code(box, code);
  html_div_cycle_code(box, [
    "This gives the name ",
    name_a,
    " the value ",
    "3",
  ]);
  html_div_cycle_code(box, ["Now writing ", name_a, " gives back ", "3"]);
  let box_logged = app_code_container_light_blue(root);
  html_div_cycle_code(box_logged, [
    "So we can put ",
    name_a,
    " inside ",
    log_name,
  ]);
  let v = held_of(name_a, 3);
  let v9 = log_of(name_a);
  html_div_code_multiple(box_logged, [v, v9]);
  html_div_cycle_code(box_logged, ["This writes out ", "3"]);
  let box_two = app_code_container_light_blue(root);
  html_div_cycle_code(box_two, ["We can give more than one value a name"]);
  let v10 = held_of(name_a, 3);
  let v11 = held_of(name_b, 5);
  let v12 = log_of(name_b);
  html_div_code_multiple(box_two, [v10, v11, v12]);
  html_div_cycle_code(box_two, [
    "Only the name inside ",
    log_name,
    " is written out",
  ]);
  html_div_cycle_code(box_two, ["So this writes out ", "5", ", not ", "3"]);
}
