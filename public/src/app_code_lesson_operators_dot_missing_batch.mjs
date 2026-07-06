import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_nested_args } from "../../../love/public/src/each_nested_args.mjs";
import { list_alphabet_cases_both } from "../../../love/public/src/list_alphabet_cases_both.mjs";
export function app_code_lesson_operators_dot_missing_batch(operator) {
  let r2 = function batch_get() {
    function lambda(la2) {
      let lefts = list_alphabet_cases_both();
      list_shuffle(list2);
      let rights = lefts;
      function lambda2(left5, right5) {
        lambda$left$right(left5, right5);
      }
      each_nested_args(lefts, rights, lambda2);
      function lambda$left$right(left3, right3) {
        lambda$left$right$la(left3, right3, la2);
      }
    }
    let list = list_adder(lambda);
    function lambda$left$right$la(left2, right2, la) {
      let combined = js_code_binary(left2, operator, right2);
      let right4 = "";
      let combined2 = js_code_binary(left2, operator, right4);
      let combined3 = js_code_binary(right2, operator, left2);
      let left4 = "";
      let combined4 = js_code_binary(left4, operator, right2);
      each([combined, combined2, combined3, combined4], la);
    }
    list_shuffle_cycled(list, 4);
    return list;
  };
  return r2;
}
