import { fn_name } from "../../love/js/fn_name.mjs";
import { list_add_multiple } from "../../love/js/list_add_multiple.mjs";
import { app_code_lesson_code_logged } from "../../love/js/app_code_lesson_code_logged.mjs";
import { eval_console_log_to_list } from "../../love/js/eval_console_log_to_list.mjs";
import { app_code_batch_question_answer_fns } from "../../love/js/app_code_batch_question_answer_fns.mjs";
import { js_code_call_arg } from "../../love/js/js_code_call_arg.mjs";
import { range_1_next } from "../../love/js/range_1_next.mjs";
import { app_code_lesson_operators_value_max } from "../../love/js/app_code_lesson_operators_value_max.mjs";
import { app_code_lesson_name_id_function } from "../../love/js/app_code_lesson_name_id_function.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { object_copy_assign } from "../../love/js/object_copy_assign.mjs";
export function app_code_lesson_functions_console_log_generic(params) {
  let lambda$code = property_get(params, "lambda$code");
  let name_id_rights = property_get(params, "name_id_rights");
  let next_arg = property_get(params, "next_arg");
  let name = js_console_log_name();
  function batch_get() {
    let arg = next_arg();
    let code = js_code_call_arg(name, arg);
    let transfomed = lambda$code(code);
    let r = [transfomed];
    return r;
  }
  let b = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_to_list,
  );
  let name_id = property_get_or_null(params, "name_id");
  let name_id_missing = null_is(name_id);
  if (name_id_missing) {
    let category = property_get_or(params, "category", "function");
    let rights = [name];
    list_add_multiple(rights, name_id_rights);
    name_id = app_code_lesson_name_id_function(category, rights);
  }
  let logged_params = object_copy_assign(params, {
    batch_get: b,
    name_id,
  });
  let lesson = app_code_lesson_code_logged(logged_params);
  let m = app_code_lesson_operators_value_max();
  let next_operator = range_1_next(m);
  let r3 = {
    lesson,
    next_operator,
    fn_name: name,
    next: next_arg,
  };
  return r3;
}
