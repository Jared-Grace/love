import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_plus_one_box } from "./app_code_lesson_statement_name_plus_one_box.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
export function app_code_lesson_statement_name_minus_one_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: one more than a name, the program the lesson on one more than a name was about, then one line saying a new name can hold a name with one taken away");
  ("The twin already seen comes first and the new one is met against it: the same lines, with a minus where the plus was. The second box is the sentence alone, because the example right below it is the program it talks about.");
  app_code_lesson_statement_name_plus_one_box(root, context);
  let box = app_code_container_light_blue(root);
  ("The sentence names the two lines it is comparing, the new one first, both in plain code with no colours on the names, the same as the sentence in the lesson on one more - asked for by the human 2026-10-16. Not picked: the new line in the colours the names wear in the program below, which the human had asked for earlier.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let more = js_code_binary_spaced_nb(name_first, plus, 1);
  let less = js_code_binary_spaced_nb(name_first, minus, 1);
  let held_more = js_code_let_statement(name_last, more);
  let held_less = js_code_let_statement(name_last, less);
  app_code_div_cycle_code(box, [
    "A new name can also hold a name with one taken away (",
    held_less,
    " instead of ",
    held_more,
    ")",
  ]);
}
