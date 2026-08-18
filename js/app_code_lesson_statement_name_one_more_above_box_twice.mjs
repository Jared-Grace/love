import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_statement_name_one_more_above_box_twice(
  r,
  box_one,
  more,
  once,
  root,
) {
  arguments_assert(arguments, 5);
  let start = property_get(r, "start");
  let name = property_get(r, "name");
  html_div_cycle_code(box_one, [
    "The other name can be a written number instead",
  ]);
  ("lines with nothing said between them are handed over together, because they are one program - the shape the quiz and the worked example of this same lesson have always drawn a program in.");
  let held = js_code_let_statement(name, start);
  let code6 = js_code_assign_statement(name, more);
  html_div_code_lines(box_one, [held, code6]);
  ("the answer is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and here only the sum is code.");
  let comes_to = list_join_empty([
    " comes to ",
    once,
    ", so this is the same line",
  ]);
  html_div_cycle_code(box_one, ["", more, comes_to]);
  let given_once = js_code_assign_statement(name, once);
  let logged = js_code_console_log_statement(name);
  app_code_code_lines_writes_out(box_one, [given_once, logged], once);
  let box_twice = app_code_container_light_blue(root);
  let r2 = {
    start,
    name,
    code6,
    box_twice,
  };
  return r2;
}
