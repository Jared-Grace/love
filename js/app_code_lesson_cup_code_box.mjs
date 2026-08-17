import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_cup_code_box(root, name, word) {
  arguments_assert(arguments, 3);
  ("the box that says in code what a one-cup screen has just said in a story: the cup is made and filled, then it is asked what is inside it, then the answer comes out");
  (
    "The story above it differs from screen to screen and this does not, because a learner arriving here has already been told the whole of it in words and the only thing to read is that the code says the same. Two screens wrote it out line for line, which meant a wording fixed on one of them stayed wrong on the other."
  );
  (
    "Only for the screens with one cup on them. The screen with two makes both cups before it asks for either, which is a different order and the whole of what that screen is about."
  );
  let quoted = app_code_string_code(word);
  let held = js_code_let_statement(name, quoted);
  let logged = js_code_console_log_statement(name);
  let box_code = app_code_container_light_blue(root);
  html_div_cycle_code(box_code, [
    "In JS we make a cup called ",
    name,
    " and put ",
    quoted,
    " in it like this",
  ]);
  html_div_code(box_code, held);
  html_div_cycle_code(box_code, [
    "Then we can write out whatever is inside the cup like this",
  ]);
  html_div_code(box_code, logged);
  app_code_writes_out_line(box_code, word);
  return box_code;
}
