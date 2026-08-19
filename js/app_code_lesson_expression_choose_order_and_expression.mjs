import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_boolean_expression_generic } from "./app_code_lesson_expression_choose_order_boolean_expression_generic.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
export function app_code_lesson_expression_choose_order_and_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line with a comparison on each side of &&, built as a shape so the quiz can work one operator out at a time: 3 < 5 && 2 < 4, or 7 >= 2 && 4 !== 4");
  ("Which of true and false each side has to come to follows from the answer wanted for the whole line: a true && needs both sides true and there is only one way to have that, while a false one has three and any of them may be drawn. Neither is written down here - the && itself is asked, so a learner cannot learn to read the answer off which side looks doubtful and nothing has to be kept in step with what && means.");
  let outer_symbol = js_operator_and_symbol();
  let tree = app_code_lesson_expression_choose_order_boolean_expression_generic(
    want_true,
    outer_symbol,
  );
  return tree;
}
