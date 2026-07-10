import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
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
  async function console_log_list(code) {
    async function lambda3(la) {
      const original = console.log;
      try {
        console.log = function lambda2(...args) {
          la(args);
        };
        await eval(code);
      } finally {
        console.log = original;
      }
    }
    let list = await list_adder_async(lambda3);
    return list;
  }
  let b = app_code_batch_question_answer_fns(batch_get, lambda);
  let lesson = app_code_lesson_code(b, name_id, above);
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
  }
}
