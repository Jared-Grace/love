import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_twin_read_generic } from "./app_code_lesson_expression_choose_order_twin_read_generic.mjs";
import { app_code_lesson_expression_swapping_add } from "./app_code_lesson_expression_swapping_add.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_expression_value_decoys_mixed } from "./app_code_expression_value_decoys_mixed.mjs";
export function app_code_lesson_expression_choose_order_swapping_add() {
  arguments_assert(arguments, 0);
  ("a line and its swap on either side of ===, taken a press at a time before the lesson next door asks for the whole line: 2 + 4 === 4 + 2, choose the left plus, choose 6, choose the right plus, choose 6, see 6 === 6, choose true");
  let words = ["Solve swapping ", "+", " and ", "*"];
  let lesson = app_code_lesson_expression_choose_order_twin_read_generic(
    words,
    app_code_lesson_expression_swapping_add,
    app_code_expression_flat_tree_of_code,
    app_code_expression_value_decoys_mixed,
  );
  return lesson;
}
