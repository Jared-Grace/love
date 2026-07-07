import { digits_positive_shuffled_next } from "../../../love/public/src/digits_positive_shuffled_next.mjs";
import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
import { list_alphabet_cases_both_shuffled_pairs } from "../../../love/public/src/list_alphabet_cases_both_shuffled_pairs.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_second_only } from "../../../love/public/src/list_first_second_only.mjs";
import { list_adder_each } from "../../../love/public/src/list_adder_each.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
export function app_code_lesson_operators_dot_missing_batch(operator) {
  let next_get = digits_positive_shuffled_next();
  lv;
  function batch_get() {
    let pairs = list_alphabet_cases_both_shuffled_pairs();
    function lambda(la, pair) {
      let r = list_first_second_only(pair);
      let second = property_get(r, "second");
      let first = property_get(r, "first");
      let combined = js_code_binary(first, operator, second);
      let combined2 = js_code_binary(first, operator, "");
      let combined3 = js_code_binary(second, operator, first);
      let combined4 = js_code_binary("", operator, second);
      each([combined, combined2, combined3, combined4], la);
    }
    let list = list_adder_each(pairs, lambda);
    list_shuffle_cycled(list, 4);
    return list;
  }
  let b = app_code_batch_question_answer_fns(
    batch_get,
    app_code_symbols_eval_valid_expression,
  );
  return b;
}
