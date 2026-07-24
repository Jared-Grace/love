import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_row_flex_center } from "./app_code_row_flex_center.mjs";
import { app_code_arrow } from "./app_code_arrow.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_remainder_divide() {
  "BUILD the remainder-by-dividing formula from a division a / b: the remainder is a - Math.floor(a / b) * b (the dividend minus its whole part). First RECOGNISE the formula among tempting wrong rewrites (multiple choice), then BUILD it from tokens (unscramble) - recognise before produce, easy before hard. The next lesson EVALUATES this formula. Uses the shared divisor/quotient batch so a quotient-0 division can appear; divisor 3..6";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  function make(divisor, quotient) {
    "given a / b, the answer to BUILD is the remainder formula a - Math.floor(a / b) * b; the dividend is quotient*divisor + a leftover so the division is uneven and the remainder is real";
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let whole_part = text_combine_multiple([
      "Math.floor(",
      division,
      ") * ",
      text_to(divisor),
    ]);
    let formula = text_combine_multiple([text_to(dividend), " - ", whole_part]);
    return {
      question: division,
      answer: formula,
    };
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 division";
    return app_code_lesson_divisor_quotient_batch(make);
  }
  let example_answer_label = "Remainder formula: ";
  let example_question_label = app_code_label_code_question();
  function recognize_decoys(question, answer) {
    "tempting wrong remainder rewrites of a / b: the WHOLE PART alone Math.floor(a / b) * b (forgot to subtract it from the dividend), the no-floor a - a / b * b (forgot to round the division down), and a - Math.floor(a / b) (forgot to multiply the quotient back by the divisor). Built from the division's numbers so they stay tied to the question";
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let whole_part = text_combine_multiple([
      "Math.floor(",
      question,
      ") * ",
      text_to(divisor),
    ]);
    let no_floor = text_combine_multiple([
      text_to(dividend),
      " - ",
      question,
      " * ",
      text_to(divisor),
    ]);
    let no_multiply = text_combine_multiple([
      text_to(dividend),
      " - Math.floor(",
      question,
      ")",
    ]);
    return [whole_part, no_floor, no_multiply];
  }
  function quizzes_get(question, answer) {
    "two quiz kinds: first RECOGNISE the remainder formula among tempting wrong rewrites (multiple choice), then BUILD it from tokens (unscramble) - recognise before produce";
    let recognize = {
      question_label: "Division: ",
      on_question: html_text_set_code_dark,
      answer_label: "Which is the remainder formula? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys: recognize_decoys,
    };
    let build = {
      question_label: "Division: ",
      on_question: html_text_set_code_dark,
      answer_label: "Build the remainder formula: ",
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
    "render the formula as a code chip on its OWN fresh div - passing html_text_set_code_dark straight to app_code_lesson_base would clear the shared example container (wiping the Code label and the division already rendered there) and leave only the formula";
    let div = html_div(parent);
    html_text_set_code_dark(div, text);
  }
  let name_id = title_name_id();
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
  function title_name_id() {
    "the home title is console.log remainder by dividing %";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Remainder by dividing ");
        html_span_text_code_dark(parent, percent);
      }
      return render;
    }
    let rights = ["remainder by dividing"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let setup = app_code_container_light_blue(root);
    html_div_cycle_code(setup, ["For ", "14 / 4", " :"]);
    html_div_cycle_code(setup, ["", "14", " is the dividend"]);
    html_div_cycle_code(setup, ["", "4", " is the divisor"]);
    html_div_cycle_code(setup, [
      "",
      "Math.floor(14 / 4) === 3",
      ", so the quotient is ",
      "3",
    ]);
    let step = app_code_row_flex_center(setup);
    html_span_text_code_dark(step, "quotient * divisor");
    app_code_arrow(step);
    html_span_text_code_dark(step, "3 * 4 === 12");
    html_div_cycle_code(setup, ["So the whole part is ", "12"]);
    let properties = app_code_container_light_blue(root);
    html_div_cycle_code(properties, [
      "Notice that ",
      "4",
      " evenly divides into ",
      "12",
    ]);
    html_div_cycle_code(properties, [
      "The divisor (",
      "4",
      ") always evenly divides into the whole part (",
      "12",
      ")",
    ]);
    html_div_cycle_code(properties, [
      "However ",
      "4",
      " does not evenly divide into ",
      "14",
    ]);
    html_div_cycle_code(properties, [
      "The divisor (",
      "4",
      ") may or may not evenly divide into the dividend (",
      "14",
      ")",
    ]);
    html_div_cycle_code(properties, [
      "The whole part (",
      "12",
      ") cannot be larger than the dividend (",
      "14",
      ")",
    ]);
    html_div_cycle_code(properties, [
      "The whole part (",
      "12",
      ") is always the largest number, that can be evenly divided by the divisor, that is not larger than the dividend (",
      "14",
      ")",
    ]);
    let result = app_code_container_light_blue(root);
    html_div_cycle_code(result, [
      "Now we will subtract the whole part (",
      "12",
      ") from the dividend (",
      "14",
      ") to find what is left over:",
    ]);
    html_div_cycle_code(result, ["", "14 - 12 === 2"]);
    html_div_cycle_code(result, ["So ", "2", " is the remainder"]);
    html_div_cycle_code(result, ["This is the same as ", "14 % 4", " :"]);
    html_div_cycle_code(result, ["", "14 % 4 === 2"]);
  }
}
