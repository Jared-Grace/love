import { app_code_lesson_code_expression } from "./app_code_lesson_code_expression.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_operators_generic_batch_get } from "./app_code_lesson_operators_generic_batch_get.mjs";
import { text_articled_pad_space } from "./text_articled_pad_space.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_replace } from "./text_replace.mjs";
import { list_first } from "./list_first.mjs";
import { equal_not } from "./equal_not.mjs";
import { app_code_lesson_name_id_symbol } from "./app_code_lesson_name_id_symbol.mjs";
import { app_code_lesson_underscores_define_symbol } from "./app_code_lesson_underscores_define_symbol.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_operators_generic(
  operator_js,
  operator_math,
  operator_name_js,
  operator_name_math,
  verb,
  math_name,
  left_transform,
) {
  let batch = app_code_lesson_operators_generic_batch_get(
    operator_js,
    left_transform,
  );
  function above(root) {
    let c = app_code_container_light_blue(root);
    app_code_lesson_underscores_define_symbol(
      c,
      operator_name_math,
      operator_math,
    );
    let list = batch();
    let first = list_first(list);
    let question = property_get(first, "question");
    let replaced = text_replace(question, operator_js, operator_math);
    let operator_name_math_articled =
      text_articled_pad_space(operator_name_math);
    let combined = text_combine_multiple([
      "In math,",
      operator_name_math_articled,
      "can be used to ",
      verb,
      " numbers: ",
    ]);
    html_div_cycle_code(c, [combined, replaced]);
    let ne = equal_not(operator_js, operator_math);
    if (ne) {
      c = app_code_container_light_blue(root);
      app_code_lesson_underscores_define_symbol(
        c,
        operator_name_js,
        operator_js,
      );
      let combined2 = text_combine(
        "In JavaScript, we do not use",
        operator_name_math_articled,
      );
      let combined3 = text_combine_multiple([" to ", verb, " numbers"]);
      html_div_cycle_code(c, [combined2, operator_math, combined3]);
    }
    let t = null;
    if (ne) {
      t = "Instead";
    } else {
      t = "In JavaScript";
    }
    let combined4 = text_combine(t, ", the ");
    let combined5 = text_combine_multiple([
      " symbol can be used to ",
      verb,
      " two numbers",
    ]);
    html_div_cycle_code(c, [combined4, operator_js, combined5]);
  }
  let name_id = app_code_lesson_name_id_symbol("operators", [math_name], operator_js);
  let lesson = app_code_lesson_code_expression(batch, name_id, above);
  return lesson;
}
