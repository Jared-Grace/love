import { app_code_symbols_eval_valid_expression } from "./app_code_symbols_eval_valid_expression.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { list_shuffle_cycled } from "./list_shuffle_cycled.mjs";
import { list_adder_each } from "./list_adder_each.mjs";
import { each } from "./each.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_second_only } from "./list_first_second_only.mjs";
import { list_alphabet_cases_both_shuffled_pairs } from "./list_alphabet_cases_both_shuffled_pairs.mjs";
export function app_code_lesson_operators_dot_batch(operator, next) {
  function batch_get() {
    let pairs = list_alphabet_cases_both_shuffled_pairs();
    function lambda(la, pair) {
      let r = list_first_second_only(pair);
      let second = property_get(r, "second");
      let first = property_get(r, "first");
      let combined = js_code_binary(first, operator, second);
      let right = next();
      let combined2 = js_code_binary(first, operator, right);
      let combined3 = js_code_binary(second, operator, first);
      let left = next();
      let combined4 = js_code_binary(left, operator, second);
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
