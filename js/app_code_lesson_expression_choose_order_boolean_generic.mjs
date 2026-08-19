import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_decoys_generic } from "./app_code_lesson_expression_choose_order_decoys_generic.mjs";
import { app_code_expression_value_decoys_boolean } from "./app_code_expression_value_decoys_boolean.mjs";
export function app_code_lesson_expression_choose_order_boolean_generic(
  name_id,
  above,
  bank,
) {
  arguments_assert(arguments, 3);
  ("a whole choose-what-to-solve lesson whose every part comes to a true or a false, so every press is answered with the other of the two");
  ("Nothing has to be invented for such a line. A part that comes to true or false comes to nothing else, so the whole of what could be pressed instead is one word, and the two buttons on the screen are both a real reading of the line.");
  let lesson = app_code_lesson_expression_choose_order_decoys_generic(
    name_id,
    above,
    bank,
    app_code_expression_value_decoys_boolean,
  );
  return lesson;
}
