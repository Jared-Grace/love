import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { each_nested_args_both_range_1_list_adder } from "../../../love/public/src/each_nested_args_both_range_1_list_adder.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function app_code_lesson_operators_generic_batch_get_unary(
  operator_js,
  left_transform,
) {
  let max = app_code_lesson_operators_generic_batch_get_max();
  let r = function batch_get() {
    let list = each_nested_args_both_range_1_list_adder(
      max,
      lambda$left$right$la,
    );
    list_shuffle(list);
    return list;
    function lambda$left$right$la(left, right, la) {
      let combined2 = text_combine(operator_js, right);
      la(combined2);
      let combined3 = text_combine(right, operator_js);
      let transformed = left_transform(left, right);
      let combined = js_code_binary_spaced_nb(transformed, operator_js, right);
      la(combined);
    }
  };
  return r;
}
