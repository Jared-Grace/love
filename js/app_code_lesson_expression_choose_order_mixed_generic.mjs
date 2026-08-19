import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_decoys_generic } from "./app_code_lesson_expression_choose_order_decoys_generic.mjs";
import { app_code_expression_value_decoys_mixed } from "./app_code_expression_value_decoys_mixed.mjs";
export function app_code_lesson_expression_choose_order_mixed_generic(
  name_id,
  above,
  bank,
) {
  arguments_assert(arguments, 3);
  ("a whole choose-what-to-solve lesson whose lines hold both kinds of operator at once, so a press is answered with numbers on an arithmetic part and with true or false on a comparison");
  ("One line, two kinds of question, and which kind it is comes from the operator that was pressed rather than from how far through the line the learner is.");
  let lesson = app_code_lesson_expression_choose_order_decoys_generic(
    name_id,
    above,
    bank,
    app_code_expression_value_decoys_mixed,
  );
  return lesson;
}
