import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_twin_read_generic } from "./app_code_lesson_expression_choose_order_twin_read_generic.mjs";
import { app_code_lesson_expression_swapping_divide } from "./app_code_lesson_expression_swapping_divide.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_expression_value_decoys_mixed } from "./app_code_expression_value_decoys_mixed.mjs";
export function app_code_lesson_expression_choose_order_swapping_divide() {
  arguments_assert(arguments, 0);
  ("a line and its swap on either side of ===, taken a press at a time before the lesson next door asks for the whole line: 5 % 3 === 3 % 5, choose the left remainder, choose 2, choose the right remainder, choose 3, see 2 === 3, choose false");
  let words = ["Solve swapping ", "/", " ", "%", " ", "**"];
  let lesson = app_code_lesson_expression_choose_order_twin_read_generic(
    words,
    app_code_lesson_expression_swapping_divide,
    app_code_expression_flat_tree_of_code,
    app_code_expression_value_decoys_mixed,
  );
  return lesson;
}
