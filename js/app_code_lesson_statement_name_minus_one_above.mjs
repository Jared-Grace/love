import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_plus_one_box } from "./app_code_lesson_statement_name_plus_one_box.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_statement_name_minus_one_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: one more than a name, the program the lesson on one more than a name was about, then one line saying a new name can hold a name with one taken away");
  ("The twin already seen comes first and the new one is met against it: the same lines, with a minus where the plus was. The second box is the sentence alone, because the example right below it is the program it talks about.");
  app_code_lesson_statement_name_plus_one_box(root, context);
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, [
    "A new name can also hold a name with one taken away",
  ]);
}
