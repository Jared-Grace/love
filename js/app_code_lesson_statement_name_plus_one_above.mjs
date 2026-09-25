import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_total_box } from "./app_code_lesson_statement_name_total_box.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_statement_name_plus_one_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: a new name made from two names, the program the lesson on keeping a total was about, then one line saying a new name can hold a name with one added");
  ("The second box is the sentence alone, the same as the lessons on giving a name a number or true or false: the example right below it is the program it talks about.");
  app_code_lesson_statement_name_total_box(root, context);
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, ["A new name can also hold a name with one added"]);
}
