import { digits_count_2_to_3_random } from "../../../love/public/src/digits_count_2_to_3_random.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { app_code_lesson_name_id_function } from "../../../love/public/src/app_code_lesson_name_id_function.mjs";
import { list_between_space_before_after } from "../../../love/public/src/list_between_space_before_after.mjs";
import { list_iterator_refillable_value } from "../../../love/public/src/list_iterator_refillable_value.mjs";
import { js_tokenizer_normalized } from "../../../love/public/src/js_tokenizer_normalized.mjs";
import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { list_between_space_before } from "../../../love/public/src/list_between_space_before.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { js_operator_to_code_call } from "../../../love/public/src/js_operator_to_code_call.mjs";
import { app_code_lesson_validity_code } from "../../../love/public/src/app_code_lesson_validity_code.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_functions_console_log() {
  let name_id = app_code_lesson_name_id_function("function", ["console.log"]);
  let symbols_required = ["(", ",", ")"];
  let next = list_iterator_refillable(digits_count_2_to_3_random);
  let next_get = list_iterator_refillable_value(filtered);
  function batch_get() {
    let r = [list];
    return r;
  }
  let b = app_code_batch_question_answer_fns(
    batch_get,
    app_code_symbols_eval_valid_expression,
  );
  let lesson = app_code_lesson_validity_code(b, name_id, above);
  return lesson;
  function above(root) {
    let o_f = list_first(operators);
    let verb = property_get(o_f, "verb");
    let c = app_code_container_light_blue(root);
    let r2 = js_operator_to_code_call(o_f, next);
    let right = property_get(r2, "right");
    let left = property_get(r2, "left");
    let call = property_get(r2, "call");
    let normalized = js_tokenizer_normalized(call);
    let parts2 = [
      "Calling the ",
      verb,
      " function requires all of these parts: ",
    ];
    html_div_cycle_code(c, parts2);
    let combined = list_between_space_before(normalized);
    html_div_cycle_code(c, combined);
    let combined2 = list_between_space_before_after(
      ["If any of these symbols "],
      symbols_required,
      [" are missing from the function call, then the code is invalid "],
    );
    let c2 = app_code_container_light_blue(root);
    html_div_cycle_code(c2, combined2);
  }
}
