import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export function app_code_lesson_operators_generic_batch_get(
  left_transform,
  operator_js,
) {
  let max = 7;
  let r = function lambda() {
    let lefts = range_1(max);
    let rights = range_1(max);
    function lambda4(la) {
      function lambda3(left, right) {
        let transformed = left_transform(left, right);
        let list3 = list_between_space_nb([transformed, operator_js, right]);
        let combined = text_combine_multiple(list3);
        la(combined);
      }
      each_nested_distinct(lefts, rights, lambda3);
    }
    let list = list_adder(lambda4);
    list_shuffle(list);
    return list;
  };
  return r;
}
