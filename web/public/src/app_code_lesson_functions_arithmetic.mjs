import { html_div_text_code_dark } from "../../../love/public/src/html_div_text_code_dark.mjs";
import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_quizzes_forwards_backwards.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { js_operator_left_right_to_call } from "../../../love/public/src/js_operator_left_right_to_call.mjs";
import { js_operator_to_expression } from "../../../love/public/src/js_operator_to_expression.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_functions_arithmetic() {
  let name = "Functions (Arithmetic)";
  let id = "functions_arithmetic";
  const example_label = "Function: ";
  const quiz_label = "What is this code rewritten using a function?";
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
  let example_count = 1;
  let quiz_backwards_label_answer =
    "Rewrite this function using a math symbol: ";
  let quiz_backwards_answer_count_override = null;
  const quizzes = app_code_lesson_quizzes_forwards_backwards(
    batch_get,
    question_label,
    html_text_set_code_dark,
    quiz_label,
    html_style_code_dark,
    "Function: ",
    html_text_set_code_dark,
    quiz_backwards_label_answer,
    html_style_code_dark,
    quiz_backwards_answer_count_override,
  );
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch_get,
    html_text_set_code_dark,
    example_label,
    quizzes,
    question_label,
    html_div_text_code_dark,
  );
  return lesson;
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
