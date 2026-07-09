import { list_adder_each_index } from "../../../love/public/src/list_adder_each_index.mjs";
import { list_between_space_before } from "../../../love/public/src/list_between_space_before.mjs";
import { js_operator_to_expression } from "../../../love/public/src/js_operator_to_expression.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { js_operator_to_code_call } from "../../../love/public/src/js_operator_to_code_call.mjs";
import { app_code_lesson_name_id } from "../../../love/public/src/app_code_lesson_name_id.mjs";
import { app_code_lesson_validity_code } from "../../../love/public/src/app_code_lesson_validity_code.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_functions_arithmetic_invalid() {
  let name_id = app_code_lesson_name_id("functions", ["arithmetic", "invalid"]);
  let operators = js_operators();
  let m = app_code_lesson_operators_generic_batch_get_max();
  let next = range_1_next(m);
  function batch_get() {
    let mapper = function lambda2(o) {
      let r = js_operator_to_code_call(o, next);
      let answer = property_get(r, "call");
      let question = property_get(r, "expression");
      let r3 = {
        question,
        answer,
      };
      return r3;
    };
    let mapped = list_map(operators, mapper);
    return mapped;
  }
  let lesson = app_code_lesson_validity_code(batch_get, name_id, above);
  return lesson;
  function above(root) {
    let o_f = list_first(operators);
    let verb = property_get(o_f, "verb");
    let c = app_code_container_light_blue(root);
    let r2 = js_operator_to_expression(o_f, next);
    let right = property_get(r2, "right");
    let left = property_get(r2, "left");
    let parts2 = [
      "Calling the ",
      verb,
      " function requires all of these parts: ",
    ];
    html_div_cycle_code(c, parts2);
    let parts = [verb, "(", left, ",", right, ")"];
    let combined = list_between_space_before(parts);
    html_div_cycle_code(c, combined);
    function lambda(la, item, index) {}
    let r4 = list_adder_each_index(list, lambda);
    html_div_cycle_code(c, [
      "If the function call is missing any of these, then the code is invalid: ",
    ]);
  }
}
