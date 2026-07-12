import { html_div_cycle_code_instead_could_write } from "./html_div_cycle_code_instead_could_write.mjs";
import { js_operator_first_code_call } from "./js_operator_first_code_call.mjs";
import { app_code_code_example_name } from "./app_code_code_example_name.mjs";
import { html_div_cycle_code_bold } from "./html_div_cycle_code_bold.mjs";
import { equal_0 } from "./equal_0.mjs";
import { js_operator_to_code_call } from "./js_operator_to_code_call.mjs";
import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { list_map } from "./list_map.mjs";
import { range_1_next } from "./range_1_next.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_lesson_functions_arithmetic() {
  let name_id = app_code_lesson_name_id("functions", ["arithmetic"]);
  let example_answer_label = "Function: ";
  let quiz_label = "What is this code rewritten using a function call?";
  let example_question_label = app_code_label_code_question();
  let operators = js_operators_arithmetic();
  let m = app_code_lesson_operators_value_max();
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
  let example_count = 1;
  let quiz_backwards_label_answer =
    "Rewrite this function call using a math symbol: ";
  let quiz_backwards_answer_count_override = null;
  let quizzes_get = app_code_lesson_quizzes_unscramble_both(
    batch_get,
    example_question_label,
    html_text_set_code_dark,
    quiz_label,
    html_style_code_dark,
    "Function call: ",
    html_text_set_code_dark,
    quiz_backwards_label_answer,
    html_style_code_dark,
    quiz_backwards_answer_count_override,
  );
  let lesson = app_code_lesson_base(
    name_id,
    above,
    example_count,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    html_div_text_code_dark,
  );
  return lesson;
  function above(root) {
    function lambda(o, index) {
      let r = js_operator_to_code_call(o, next);
      let code = property_get(r, "call");
      let expression = property_get(r, "expression");
      let c = app_code_container_light_blue(root);
      html_div_cycle_code_instead_could_write(c, expression, code);
      let eq = equal_0(index);
    }
    each_index(operators, lambda);
    let c = app_code_container_light_blue(root);
    let o_f = js_operator_first_code_call(next);
    let call = property_get(o_f, "call");
    let verb = property_get(o_f, "verb");
    app_code_code_example_name(c, verb, "function");
    html_div_cycle_code_bold(c, ["", call, " is called a ", "function call"]);
  }
}
