import { app_code_lesson_expression_remainder_divide_above } from "./app_code_lesson_expression_remainder_divide_above.mjs";
import { app_code_lesson_expression_remainder_divide_item_qa_for } from "./app_code_lesson_expression_remainder_divide_item_qa_for.mjs";
import { app_code_lesson_expression_remainder_divide_qa_for } from "./app_code_lesson_expression_remainder_divide_qa_for.mjs";
import { app_code_lesson_expression_remainder_divide_title_name_id } from "./app_code_lesson_expression_remainder_divide_title_name_id.mjs";
import { js_operator_percent_sign } from "./js_operator_percent_sign.mjs";
import { app_code_uneven_dividend_only } from "./app_code_uneven_dividend_only.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { text_to } from "./text_to.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_remainder_divide() {
  "BUILD the remainder-by-dividing formula from a division a / b: the remainder is a - Math.floor(a / b) * b (the dividend minus its whole part). First RECOGNISE the formula among tempting wrong rewrites (multiple choice), then BUILD it from tokens (unscramble) - recognise before produce, easy before hard. The next lesson EVALUATES this formula. Uses the shared divisor/quotient batch so a quotient-0 division can appear; divisor 3..6";
  let percent = js_operator_percent_sign();
  function make(divisor, quotient) {
    "given a / b, the answer to BUILD is the remainder formula a - Math.floor(a / b) * b; the dividend is quotient*divisor + a leftover so the division is uneven and the remainder is real";
    let dividend = app_code_uneven_dividend_only(quotient, divisor);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let t = text_to(divisor);
    let whole_part = text_combine_multiple([
      "Math.floor(",
      division,
      ") * ",
      t,
    ]);
    let t2 = text_to(dividend);
    let formula = text_combine_multiple([t2, " - ", whole_part]);
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
  let example_answer_label = "Remainder formula: ";
  let example_question_label = app_code_label_code_question();
  function recognize_decoys(question, answer) {
    "tempting wrong remainder rewrites of a / b: the WHOLE PART alone Math.floor(a / b) * b (forgot to subtract it from the dividend), the no-floor a - a / b * b (forgot to round the division down), and a - Math.floor(a / b) (forgot to multiply the quotient back by the divisor). Built from the division's numbers so they stay tied to the question";
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let t3 = text_to(divisor);
    let whole_part = text_combine_multiple([
      "Math.floor(",
      question,
      ") * ",
      t3,
    ]);
    let t4 = text_to(dividend);
    let t5 = text_to(divisor);
    let no_floor = text_combine_multiple([t4, " - ", question, " * ", t5]);
    let t6 = text_to(dividend);
    let no_multiply = text_combine_multiple([
      t6,
      " - Math.floor(",
      question,
      ")",
    ]);
    let r2 = [whole_part, no_floor, no_multiply];
    return r2;
  }
  function backwards_decoys(shown_formula, answer_percent) {
    "for the backwards kind (given the remainder formula, pick the % it equals): tempting wrong matches. The DIVISION a / b (it sits right inside the formula, but that is the division, not its remainder), the SWAPPED remainder b % a, and the QUOTIENT part Math.floor(a / b) (only a piece of the formula). Dividend is the formula's first integer, divisor the third (inside Math.floor)";
    let nums = text_integers(shown_formula);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 2);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let swapped = js_code_binary_spaced_nb(divisor, "%", dividend);
    let floored = text_combine_multiple(["Math.floor(", division, ")"]);
    let r3 = [division, swapped, floored];
    return r3;
  }
  function quizzes_get(question, answer) {
    "three quiz kinds: RECOGNISE the remainder formula among wrong rewrites (multiple choice), BUILD it from tokens (unscramble), then BACKWARDS - given the formula, pick the % it equals (14 - Math.floor(14 / 4) * 4 is 14 % 4). Forwards recognise then produce, then connect the long formula to the % shorthand";
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let percent_expression = js_code_binary_spaced_nb(dividend, "%", divisor);
    let recognize = {
      question_label: app_code_label_code_question(),
      on_question: html_text_set_code_dark,
      answer_label: "Which is the remainder formula? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys: recognize_decoys,
    };
    let build = {
      question_label: app_code_label_code_question(),
      on_question: html_text_set_code_dark,
      answer_label: "Build the remainder formula: ",
      answer_on_button: null,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_token_select,
    };
    let backwards = {
      question_label: "Formula: ",
      on_question: html_text_set_code_dark,
      answer_label: "Which is this the same as? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys: backwards_decoys,
      backwards: true,
      qa_for: app_code_lesson_expression_remainder_divide_item_qa_for,
    };
    let infos = [recognize, build, backwards];
    function each_info(info) {
      let quiz_qa = app_code_lesson_expression_remainder_divide_qa_for(
        info,
        question,
        answer,
        percent_expression,
      );
      function quiz(context, parent, container, refresh, next_get) {
        app_code_lesson_quiz(
          container,
          quiz_qa,
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
      let quiz_qa = app_code_lesson_expression_remainder_divide_qa_for(
        info,
        question,
        answer,
        percent_expression,
      );
      let exercise = {
        info,
        question: property_get(quiz_qa, "question"),
        answer: property_get(quiz_qa, "answer"),
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
      " would clear the shared example container (wiping the Code label and the division already rendered there) and leave only the formula");
    let div = html_div(parent);
    html_text_set_code_dark(div, text);
  }
  let name_id =
    app_code_lesson_expression_remainder_divide_title_name_id(percent);
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
    let r4 = app_code_lesson_expression_remainder_divide_above(root);
    return r4;
  }
}
