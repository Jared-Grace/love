import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_box } from "./app_code_lesson_statement_name_value_box.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_statement_name_number_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: a name holding a word, the program the lesson on giving a value a name was about, then one line saying a name can hold a number too");
  ("The second box is the sentence alone, the same as the lesson on true or false: the examples right below it are the programs it talks about.");
  app_code_lesson_statement_name_value_box(root, context);
  let box_number = app_code_container_light_blue(root);
  html_div_cycle_code(box_number, ["A variable can also hold a number"]);
}
