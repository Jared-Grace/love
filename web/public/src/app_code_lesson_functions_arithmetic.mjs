import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { js_operator_left_right_to_call } from "../../../love/public/src/js_operator_left_right_to_call.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { js_operator_to_expression } from "../../../love/public/src/js_operator_to_expression.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_functions_arithmetic() {
  let name = "Functions (Arithmetic)";
  let id = "functions_arithmetic";
  const example_label = "Function: ";
  const quiz_label = "How many symbols are there? ";
  let question_label = app_code_label_code_question();
  let operators = js_operators();
  let m = app_code_lesson_operators_generic_batch_get_max();
  let next = range_1_next(m);
  function batch_get() {
    let mapper = function lambda2(o) {
      let e = js_operator_to_expression(o, next);
      let question = property_get(e, "expression");
      let answer = js_operator_left_right_to_call(o, e);
      let r3 = {
        question,
        answer,
      };
      return r3;
    };
    let mapped = list_map(operators, mapper);
    return mapped;
  }
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    noop,
    batch_get,
    example_label,
    quiz_label,
    1,
    app_code_symbol,
    question_label,
    noop,
  );
  return r;
  function above(root) {
    let next = range_1_next(m);
    function lambda(o) {
      let r2 = js_operator_to_expression(o, next);
      let expression = property_get(r2, "expression");
      let code = js_operator_left_right_to_call(o, r2);
      let c = app_code_container_light_blue(root);
      html_div_cycle_code(c, [
        "Instead of ",
        expression,
        " we could write: ",
        code,
      ]);
    }
    each(operators, lambda);
  }
}
