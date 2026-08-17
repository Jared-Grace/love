import { app_code_lesson_expression_whole_part_formula_recognize_decoys } from "./app_code_lesson_expression_whole_part_formula_recognize_decoys.mjs";
import { app_code_lesson_expression_whole_part_formula_above } from "./app_code_lesson_expression_whole_part_formula_above.mjs";
import { app_code_lesson_expression_whole_part_formula_title_name_id } from "./app_code_lesson_expression_whole_part_formula_title_name_id.mjs";
import { app_code_uneven_division_code } from "./app_code_uneven_division_code.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_lesson_expression_whole_part_formula() {
  "the FIRST of the three whole-part lessons: LEARN THE EQUATION a / b => Math.floor(a / b) * b (rewrite a division into its whole-part formula). The learner builds the formula from tokens given the division, so they produce the rewrite themselves rather than just recognising it. The next lesson evaluates the formula, and the one after does both. Uses the shared divisor/quotient batch so a quotient-0 division can appear";
  function make(divisor, quotient) {
    "given a / b, the answer to BUILD is the whole-part formula Math.floor(a / b) * b; the dividend is quotient*divisor + a leftover so the division is uneven";
    let division = app_code_uneven_division_code(quotient, divisor);
    let t = text_to(divisor);
    let formula = text_combine_multiple(["Math.floor(", division, ") * ", t]);
    let r = {
      question: division,
      answer: formula,
    };
    return r;
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 division";
    let list = app_code_lesson_divisor_quotient_batch(make);
    return list;
  }
  let example_answer_label = "Whole part formula: ";
  let example_question_label = app_code_label_code_question();
  function recognize_decoys(question, answer) {
    let r4 = app_code_lesson_expression_whole_part_formula_recognize_decoys(
      question,
      answer,
    );
    return r4;
  }
  function quizzes_get(question, answer) {
    "two quiz kinds: first RECOGNISE the whole-part formula among tempting wrong rewrites (multiple choice), then BUILD it from tokens - recognise before produce";
    let recognize = {
      question_label: app_code_label_code_question(),
      on_question: html_text_set_code_dark,
      answer_label: "Which is the whole part formula? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys: recognize_decoys,
    };
    let build = {
      question_label: app_code_label_code_question(),
      on_question: html_text_set_code_dark,
      answer_label: "Build the whole part formula: ",
      answer_on_button: null,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_token_select,
    };
    let infos = [recognize, build];
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
  function example_answer(parent, text) {
    ("render the formula as a code chip on its OWN fresh div - passing ",
      html_text_set_code_dark.name,
      " straight to ",
      app_code_lesson_base.name,
      " would clear the shared example container (wiping the Code label and the division question already rendered there) and leave only the formula");
    let div = html_div(parent);
    html_text_set_code_dark(div, text);
  }
  let name_id = app_code_lesson_expression_whole_part_formula_title_name_id();
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    example_answer,
  );
  return lesson;
  function above(root) {
    let r3 = app_code_lesson_expression_whole_part_formula_above(root);
    return r3;
  }
}
