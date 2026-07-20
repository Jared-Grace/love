import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_choose_operand } from "./app_code_lesson_quiz_choose_operand.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_quiz_correction_operand } from "./app_code_quiz_correction_operand.mjs";
import { app_code_lesson_bold_term } from "./app_code_lesson_bold_term.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_operand_generic(params) {
  "the shared shape for the identify-an-operand lessons (dividend / divisor / quotient): show a division (or Math.floor(a / b) === c) and let the learner pick which number is the named role, the other numbers standing as decoys (app_code_lesson_quiz_choose_operand) with a role-named 'Show me the answer' (app_code_quiz_correction_operand). The caller passes only what differs: the role word, the define_prose that ends in the bolded term, a batch_get producing {question, answer}, and the name_id. The intro is BUILT here from a random sample of batch_get, so its worked example varies each visit (a different example may be the one that clicks)";
  let role = property_get(params, "role");
  let define_prose = property_get(params, "define_prose");
  let batch_get = property_get(params, "batch_get");
  let name_id = property_get(params, "name_id");
  let example_question_label = app_code_label_code_question();
  let answer_label = text_combine_multiple(["Choose the ", role, ": "]);
  let example_answer_label = text_combine_multiple(["The ", role, " is: "]);
  function above(root) {
    "define the role with the term bolded, then a RANDOM worked example from the same generator as the quiz, then the ask";
    let intro = app_code_container_light_blue(root);
    app_code_lesson_bold_term(intro, define_prose, role);
    let sample = list_first(batch_get());
    let sample_question = property_get(sample, "question");
    let sample_answer = property_get(sample, "answer");
    let middle = text_combine_multiple([" the ", role, " is "]);
    html_div_cycle_code(intro, ["In ", sample_question, middle, sample_answer]);
    let ask = app_code_container_light_blue(root);
    html_div_cycle_code(ask, [
      text_combine_multiple(["In this lesson you will choose the ", role]),
    ]);
  }
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
