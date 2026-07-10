import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { property_initialize_lambda } from "../../../love/public/src/property_initialize_lambda.mjs";
import { digit_count_values_shuffled_next } from "../../../love/public/src/digit_count_values_shuffled_next.mjs";
import { each_range_1 } from "../../../love/public/src/each_range_1.mjs";
import { app_code_lesson_code_logged } from "../../../love/public/src/app_code_lesson_code_logged.mjs";
import { eval_console_log_to_list } from "../../../love/public/src/eval_console_log_to_list.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { app_code_lesson_name_id_function } from "../../../love/public/src/app_code_lesson_name_id_function.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_functions_console_log() {
  const fn_name = "console.log";
  let name_id = app_code_lesson_name_id_function("function", [fn_name]);
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
    let code = js_code_call_args(fn_name, [v]);
    let r = [code];
    return r;
  }
  let b = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged(b, name_id, above);
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
  }
}
