import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { html_div_cycle_code_instead_could_write } from "../../../love/public/src/html_div_cycle_code_instead_could_write.mjs";
import { list_transform_first_combine } from "../../../love/public/src/list_transform_first_combine.mjs";
import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
import { js_code_parenthesis_list } from "../../../love/public/src/js_code_parenthesis_list.mjs";
import { js_code_comma } from "../../../love/public/src/js_code_comma.mjs";
import { js_code_call_arg } from "../../../love/public/src/js_code_call_arg.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_operator_first_code_call } from "../../../love/public/src/js_operator_first_code_call.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_value_max } from "../../../love/public/src/app_code_lesson_operators_value_max.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { property_initialize_lambda } from "../../../love/public/src/property_initialize_lambda.mjs";
import { digit_count_values_shuffled_next } from "../../../love/public/src/digit_count_values_shuffled_next.mjs";
import { each_range_1 } from "../../../love/public/src/each_range_1.mjs";
import { app_code_lesson_code_logged } from "../../../love/public/src/app_code_lesson_code_logged.mjs";
import { eval_console_log_to_list } from "../../../love/public/src/eval_console_log_to_list.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { app_code_lesson_name_id_function } from "../../../love/public/src/app_code_lesson_name_id_function.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { html_div_cycle_code_multiple } from "../../../love/public/src/html_div_cycle_code_multiple.mjs";
export function app_code_lesson_functions_console_log() {
  const fn_name = "console.log";
  let name_id = app_code_lesson_name_id_function("function", [fn_name]);
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
  function above(root) {
    let o_f = js_operator_first_code_call(next_operator);
    let code2 = property_get(o_f, "code");
    let verb = property_get(o_f, "verb");
    let c = app_code_container_light_blue(root);
    let v3 = next();
    let fn_name_call = js_code_call_arg(fn_name, v3);
    html_div_cycle_code_instead_could_write(c, code2, fn_name_call);
    let r2 = js_code_parenthesis_list();
    let parts = list_between_space_nb(r2);
    let comma = js_code_comma();
    const inside = [" inside its ", ...parts];
    html_div_cycle_code(c, [
      "However, ",
      verb,
      " and ",
      fn_name,
      " are different",
    ]);
    let c2 = app_code_container_light_blue(root);
    html_div_cycle_code_multiple(c2, [
      ["", verb, " has two numbers separated by a ", comma, ...inside],
      [
        "But ",
        fn_name,
        ...list_transform_first_combine(" only has one number ", inside),
      ],
    ]);
    let c3 = app_code_container_light_blue(root);
    html_div_cycle_code_multiple(c3, [
      [
        "Whatever is inside the ",
        ...parts,
        " of ",
        fn_name,
        " will be written out for someone to read",
      ],
    ]);
  }
  function batch_get() {
    let v = next();
    let code = js_code_call_arg(fn_name, v);
    let r = [code];
    return r;
  }
  let b = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged(b, name_id, above);
  return lesson;
}
