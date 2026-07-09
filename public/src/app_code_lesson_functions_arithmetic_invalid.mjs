import { js_operator_to_code_call_only } from "../../../love/public/src/js_operator_to_code_call_only.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { js_tokenizer_normalized } from "../../../love/public/src/js_tokenizer_normalized.mjs";
import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { list_between_space } from "../../../love/public/src/list_between_space.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_between_space_before } from "../../../love/public/src/list_between_space_before.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { js_operator_to_code_call } from "../../../love/public/src/js_operator_to_code_call.mjs";
import { app_code_lesson_name_id } from "../../../love/public/src/app_code_lesson_name_id.mjs";
import { app_code_lesson_validity_code } from "../../../love/public/src/app_code_lesson_validity_code.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_functions_arithmetic_invalid() {
  let name_id = app_code_lesson_name_id("functions", ["arithmetic", "invalid"]);
  let operators = js_operators();
  let m = app_code_lesson_operators_generic_batch_get_max();
  let next = range_1_next(m);
  let symbols_required = ["(", ",", ")"];
  let operators_next = list_iterator_refillable(operators);
  let next_get = list_iterator_refillable(refill_get);
  function batch_get() {
    function lambda(la) {
      let o = operators_next();
      let call = js_operator_to_code_call_only(o, next);
      let next_get2 = list_iterator_refillable(symbols_required);
    }
    let list = list_adder(lambda);
    return mapped;
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
    let combined2 = list_between_space(symbols_required);
    list_add_first(
      combined2,
      "If any of these symbols are missing from the function call, then the code is invalid ",
    );
    let c2 = app_code_container_light_blue(root);
    html_div_cycle_code(c2, combined2);
  }
}
