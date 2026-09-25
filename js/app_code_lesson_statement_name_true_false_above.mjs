import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_box } from "./app_code_lesson_statement_name_value_box.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_statement_name_true_false_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: a name holding a word, the program the lesson on giving a value a name was about, then one line saying a name can hold true or false too");
  ("The word comes first because the learner has already seen it, and the new value is met against it.");
  ("The second box is the sentence alone, with no program of its own, at the human's request. The examples right below it are the programs it talks about, both of them, so a program here would show one of them twice.");
  app_code_lesson_statement_name_value_box(root, context);
  let t = js_keyword_true();
  let f = js_keyword_false();
  let box_true = app_code_container_light_blue(root);
  html_div_cycle_code(box_true, ["A variable can also hold ", t, " or ", f]);
}
