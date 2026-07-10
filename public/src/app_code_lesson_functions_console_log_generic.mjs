import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_code_lesson_code_logged } from "../../../love/public/src/app_code_lesson_code_logged.mjs";
import { eval_console_log_to_list } from "../../../love/public/src/eval_console_log_to_list.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { js_code_call_arg } from "../../../love/public/src/js_code_call_arg.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range_1 } from "../../../love/public/src/each_range_1.mjs";
import { property_initialize_lambda } from "../../../love/public/src/property_initialize_lambda.mjs";
import { digit_count_values_shuffled_next } from "../../../love/public/src/digit_count_values_shuffled_next.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_value_max } from "../../../love/public/src/app_code_lesson_operators_value_max.mjs";
import { app_code_lesson_name_id_function } from "../../../love/public/src/app_code_lesson_name_id_function.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function app_code_lesson_functions_console_log_generic(
  above,
  lambda$code,
  name_id_rights,
) {
  const fn_name = "console.log";
  const rights = [fn_name];
  list_add_multiple(list2, items);
  let name_id = app_code_lesson_name_id_function("function", rights);
  let m = app_code_lesson_operators_value_max();
  let next_operator = range_1_next(m);
  let data = {};
  function lambda() {
    function lambda3(la) {
      function lambda2(c) {
        function lambda5() {
          let next = digit_count_values_shuffled_next(c);
          return next;
        }
        let next = property_initialize_lambda(data, c, lambda5);
        let v2 = next();
        la(v2);
      }
      const digit_count_max = 3;
      each_range_1(digit_count_max, lambda2);
    }
    let list = list_adder(lambda3);
    return list;
  }
  let next = list_iterator_refillable(lambda);
  function batch_get() {
    let v = next();
    let code = js_code_call_arg(fn_name, v);
    let transfomed = lambda$code(code);
    let r = [transfomed];
    return r;
  }
  let b = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged(b, name_id, above);
  let r3 = {
    lesson,
    next_operator,
    fn_name,
    next,
  };
  return r3;
}
