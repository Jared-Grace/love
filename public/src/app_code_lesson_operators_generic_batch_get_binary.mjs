import { text_left_right_middle_random_space_nb } from "../../../love/public/src/text_left_right_middle_random_space_nb.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { each_nested_args_both_range_1_list_adder } from "../../../love/public/src/each_nested_args_both_range_1_list_adder.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
export function app_code_lesson_operators_generic_batch_get_binary(
  operator_js,
  left_transform,
) {
  let max = app_code_lesson_operators_generic_batch_get_max();
  let r = function batch_get() {
    let list = each_nested_args_both_range_1_list_adder(
      max,
      lambda$left$right$la,
    );
    function lambda$left$right$la(left, right, la) {
      let transformed = left_transform(left, right);
      let combined = js_code_binary_spaced_nb(transformed, operator_js, right);
      let combined2 = text_left_right_middle_random_space_nb(
        operator_js,
        right,
      );
      let transformed2 = left_transform(left, right);
      let combined3 = js_code_binary_spaced_nb(
        transformed2,
        operator_js,
        right,
      );
      let combined4 = text_left_right_middle_random_space_nb(left, operator_js);
      each([combined, combined2, combined3, combined4], la);
    }
    list_shuffle_cycled(list, 4);
    return list;
  };
  return r;
}
