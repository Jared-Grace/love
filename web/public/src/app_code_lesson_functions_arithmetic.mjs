import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_symbol_separated } from "../../../love/public/src/app_code_symbol_separated.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_functions_arithmetic() {
  let name = "Functions (Arithmetic)";
  let id = "functions_arithmetic";
  const example_label = "What is: ";
  const quiz_label = "How many symbols are there? ";
  let question_label = app_code_label_symbols();
  let operators = js_operators();
  let next = range_1_next(m);
  function symbols_to_answer(symbols) {
    log(app_code_lesson_functions_arithmetic.name, {
      symbols,
    });
  }
  function batch_get() {
    let r = function property_get_curried_right_result(object) {
      let property_name = "operator";
      let value = property_get(object, property_name);
      return value;
    };
    let mapped = list_map(operators, r);
  }
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    noop,
    batch_get,
    example_label,
    quiz_label,
    symbols_to_answer,
    1,
    app_code_symbol_separated,
    question_label,
  );
  return r;
  function above(root) {
    let m = app_code_lesson_operators_generic_batch_get_max();
    let next = range_1_next(m);
    function lambda(o) {
      let operator = property_get(o, "operator");
      let verb = property_get(o, "verb");
      let left_transform = property_get(o, "left_transform");
      let left = next();
      let right = next();
      left = left_transform(left, right);
      let combined = js_code_binary_spaced_nb(left, operator, right);
      let c = app_code_container_light_blue(root);
      let code = js_code_call_args(verb, [left, right]);
      html_div_cycle_code(c, [
        "Instead of ",
        combined,
        " we could write: ",
        code,
      ]);
    }
    each(operators, lambda);
  }
}
