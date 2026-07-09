import { app_code_lesson_quizzes_unscramble } from "../../../love/public/src/app_code_lesson_quizzes_unscramble.mjs";
import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_label_code_answer_quiz } from "../../../love/public/src/app_code_label_code_answer_quiz.mjs";
import { app_code_label_code_answer_example } from "../../../love/public/src/app_code_label_code_answer_example.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { app_code_lesson_operators_generic_batch_get } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_name_id } from "../../../love/public/src/app_code_lesson_name_id.mjs";
import { app_code_lesson_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_underscores_define_symbol.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
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
    const operator_name_math_articled =
      text_articled_pad_space(operator_name_math);
    html_div_cycle_code(c, [
      text_combine_multiple([
        "In math,",
        operator_name_math_articled,
        "can be used to ",
        verb,
        " numbers: ",
      ]),
      replaced,
    ]);
    let ne = equal_not(operator_js, operator_math);
    if (ne) {
      c = app_code_container_light_blue(root);
      app_code_lesson_underscores_define_symbol(
        c,
        operator_name_js,
        operator_js,
      );
      html_div_cycle_code(c, [
        text_combine(
          "In JavaScript, we do not use",
          operator_name_math_articled,
        ),
        operator_math,
        text_combine_multiple([" to ", verb, " numbers"]),
      ]);
    }
    let t = null;
    if (ne) {
      t = "Instead";
    } else {
      t = "In JavaScript";
    }
    html_div_cycle_code(c, [
      text_combine(t, ", the "),
      operator_js,
      text_combine_multiple([" symbol can be used to ", verb, " two numbers"]),
    ]);
  }
  const example_label = app_code_label_code_answer_example();
  const quiz_label = app_code_label_code_answer_quiz();
  let name_id = app_code_lesson_name_id("operators", [math_name]);
  let question_label = app_code_label_code_question();
  let example_count = 1;
  let quiz_backwards_label_answer = "What code produces this value? ";
  let on_quiz_answer_button_backwards = null;
  let quiz_backwards_answer_count_override = null;
  let on_question_forwards = html_text_set_code_dark;
  const quizzes = app_code_lesson_quizzes_unscramble(
    batch,
    question_label,
    on_question_forwards,
    quiz_label,
    noop,
    "Value: ",
    app_code_style_normal_text,
    quiz_backwards_label_answer,
    on_question_forwards,
    quiz_backwards_answer_count_override,
  );
  let lesson = app_code_lesson_base(
    name_id,
    above,
    example_count,
    batch,
    on_question_forwards,
    example_label,
    quizzes,
    question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
