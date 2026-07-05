import { each_nested_args_both_range_1_list_adder } from "../../../love/public/src/each_nested_args_both_range_1_list_adder.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function app_code_lesson_operators_generic_batch_get(
  operator_js,
  left_transform,
) {
  let max = 7;
  let r = function lambda2() {
    let list = each_nested_args_both_range_1_list_adder(
      max,
      lambda$left$right$la,
    );
    list_shuffle(list);
    return list;
    function lambda$left$right$la(left, right, la) {
      let transformed = left_transform(left, right);
      let combined = js_code_binary_spaced_nb(transformed, operator_js, right);
      la(combined);
    }
  };
  return r;
}
