import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_operators_value_max } from "../../../love/public/src/app_code_lesson_operators_value_max.mjs";
import { each_nested_args_range_1_list_adder } from "../../../love/public/src/each_nested_args_range_1_list_adder.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function app_code_lesson_operators_generic_batch_get(
  operator_js,
  left_transform,
) {
  let max = app_code_lesson_operators_value_max();
  function batch_get() {
    let list = each_nested_args_range_1_list_adder(max, lambda$left$right$la);
    list_shuffle(list);
    return list;
    function lambda$left$right$la(left, right, la) {
      let transformed = left_transform(left, right);
      let combined = js_code_binary_spaced_nb(transformed, operator_js, right);
      la(combined);
    }
  }
  let b = app_code_batch_question_answer_fns(batch_get, eval);
  return b;
}
