import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { text_random_or_empty } from "../../../love/public/src/text_random_or_empty.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { each_nested_args_both_range_1_list_adder } from "../../../love/public/src/each_nested_args_both_range_1_list_adder.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
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
    list_shuffle_cycled(list, 2);
    return list;
    function lambda$left$right$la(left, right, la) {
      let combined = text_combine(operator_js, right);
      let t = text_space_nb();
      let r2 = text_random_or_empty(t);
      let combined2 = text_combine_multiple([right, r2, operator_js]);
      let transformed = left_transform(left, right);
      let combined3 = js_code_binary_spaced_nb(transformed, operator_js, right);
      let combined4 = text_combine(left, operator_js);
      each([combined, combined2, combined3, combined4], la);
    }
  };
  return r;
}
