import { each_nested_args_both_range_1 } from "../../../love/public/src/each_nested_args_both_range_1.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function app_code_lesson_operators_generic_batch_get(
  operator_js,
  left_transform,
) {
  let max = 7;
  let r = function lambda2() {
    function lambda4(la) {
      each_nested_args_both_range_1(max, lambda$left$right);
      function lambda$left$right(left, right) {
        lambda$left$right$la(left, right, la);
      }
    }
    let list = list_adder(lambda4);
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
