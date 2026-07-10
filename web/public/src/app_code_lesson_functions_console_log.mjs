import { eval_console_log_replace } from "../../../love/public/src/eval_console_log_replace.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { app_code_lesson_code } from "../../../love/public/src/app_code_lesson_code.mjs";
import { digits_count_2_to_3_random } from "../../../love/public/src/digits_count_2_to_3_random.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { app_code_lesson_name_id_function } from "../../../love/public/src/app_code_lesson_name_id_function.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_functions_console_log() {
  const fn_name = "console.log";
  let name_id = app_code_lesson_name_id_function("function", [fn_name]);
  let next = list_iterator_refillable(digits_count_2_to_3_random);
  function batch_get() {
    let v = next();
    let code = js_code_call_args(fn_name, [v]);
    let r = [code];
    return r;
  }
  function console_log_list(code) {
    function lambda3(la) {
      function console_log_replacement(...args) {
        let r2 = la(args);
        return r2;
      }
      let r3 = eval_console_log_replace(console_log_replacement, code);
      return r3;
    }
    let logs = list_adder(lambda3);
    return logs;
  }
  let b = app_code_batch_question_answer_fns(batch_get, lambda);
  let lesson = app_code_lesson_code(b, name_id, above);
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
  }
}
