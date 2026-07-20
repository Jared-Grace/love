import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_choose_operand } from "./app_code_lesson_quiz_choose_operand.mjs";
import { app_code_quiz_correction_operand } from "./app_code_quiz_correction_operand.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_operand_generic(params) {
  "the shared shape for the identify-an-operand lessons (dividend / divisor / quotient): show a division (or a / b === c) and let the learner pick which number is the named role, the other operands standing as decoys (app_code_lesson_quiz_choose_operand) with a role-named 'Show me the answer' (app_code_quiz_correction_operand). The caller passes the role word, a batch_get producing {question, answer} (the question built with REAL spaces so the tokens split), an above intro, and the name_id - only those differ between the three lessons";
  let role = property_get(params, "role");
  let batch_get = property_get(params, "batch_get");
  let above = property_get(params, "above");
  let name_id = property_get(params, "name_id");
  let example_question_label = app_code_label_code_question();
  let answer_label = text_combine_multiple(["Choose the ", role, ": "]);
  let example_answer_label = text_combine_multiple(["The ", role, " is: "]);
  function quizzes_get(question, answer) {
    let forwards = {
      question_label: "Division: ",
      on_question: html_text_set_code_dark,
      answer_label,
      answer_on_button: null,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_choose_operand,
      correction: app_code_quiz_correction_operand(role),
    };
    let infos = [forwards];
    function each_info(info) {
      function quiz(context, parent, container, refresh, next_get) {
        app_code_lesson_quiz(
          container,
          {
            question,
            answer,
          },
          parent,
          context,
          refresh,
          info,
          batch_get,
          quizzes,
          next_get,
        );
      }
      return quiz;
    }
    let quizzes = list_map(infos, each_info);
    function each_exercise(info) {
      let exercise = {
        info,
        question,
        answer,
        batch_get,
      };
      return exercise;
    }
    let exercises = list_map(infos, each_exercise);
    let quizzes_exercises = {
      quizzes,
      exercises,
    };
    return quizzes_exercises;
  }
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
