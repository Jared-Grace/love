import { newFunction } from "../../../love/public/src/newFunction.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export function app_code_lesson_operators_generic_batch_get(
  operator_js,
  left_transform,
) {
  let max = 7;
  let r = function lambda2() {
    function lambda4(la) {
      let lefts = range_1(max);
      let rights = range_1(max);
      function lambda3(left, right) {
        newFunction(left, right);
      }
      each_nested_distinct(lefts, rights, lambda3);
      function newFunction(left, right) {
        let transformed = left_transform(left, right);
        let combined = js_code_binary_spaced_nb(
          transformed,
          operator_js,
          right,
        );
        la(combined);
      }
    }
    let list = list_adder(lambda4);
    list_shuffle(list);
    return list;
  };
  return r;
}
