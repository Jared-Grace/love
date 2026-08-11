import { app_code_lesson_expression_remainder_subtract_subtract_code } from "./app_code_lesson_expression_remainder_subtract_subtract_code.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
import { js_operator_percent_sign } from "./js_operator_percent_sign.mjs";
import { integer_random_below } from "./integer_random_below.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_remainder_subtract() {
  "practice a % b (remainder) by writing it out as repeated subtraction (17 % 5 becomes 17 - 5 - 5 - 5): the quiz matches the % form with its subtraction chain, because this lesson teaches what % MEANS - take the divisor away again and again until what is left is smaller than it, and that leftover is the remainder - not the closed-form value; divisor 3..6, 2 or 3 subtractions, leftover 1..divisor-1";
  let percent = js_operator_percent_sign();
  function batch_get() {
    "four questions - four distinct divisors (so the chains never look alike), each with its own count of subtractions (2 or 3, so the chain length varies) and its own leftover, so the number worked on is count*divisor + leftover and the subtraction always stops one short of going negative; the ANSWER is the subtraction chain, not the value";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    function to_pair(divisor) {
      let count = integer_random(2, 3);
      let leftover = integer_random_below(divisor);
      let number = multiply_add(count, divisor, leftover);
      let question = js_code_binary_spaced_nb(number, percent, divisor);
      let answer = app_code_lesson_expression_remainder_subtract_subtract_code(
        number,
        divisor,
        count,
      );
      let pair = {
        question,
        answer,
      };
      return pair;
    }
    let pairs = list_map(divisors, to_pair);
    return pairs;
  }
  let name_id = title_name_id();
  let example_question_label = app_code_label_code_question();
  let forwards = {
    question_label: example_question_label,
    on_question: html_text_set_code_dark,
    answer_label: "What is this worked out by subtracting? ",
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let backwards = {
    question_label: "Subtraction: ",
    on_question: html_text_set_code_dark,
    answer_label: "Which code uses % for this? ",
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble_both({
    batch_get,
    forwards,
    backwards,
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    "Subtraction: ",
    quizzes_get,
    example_question_label,
    html_div_text_code_dark,
  );
  return lesson;
  function title_name_id() {
    "the home title is console.log remainder by subtracting %";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Remainder by subtracting ");
        html_span_text_code_dark(parent, percent);
      }
      return render;
    }
    let rights = ["remainder by subtracting"];
    let left = app_code_category_operators();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function above(root) {
    let setup = app_code_container_light_blue(root);
    html_div_cycle_code(setup, [
      "You already know how to subtract like ",
      "20 - 5 - 5",
    ]);
    html_div_cycle_code(setup, [
      "What if you keep subtracting the same number until you can not subtract it again?",
    ]);
    let work = app_code_container_light_blue(root);
    html_div_cycle_code(work, ["", "17 - 5 - 5 - 5", " leaves ", "2"]);
    html_div_cycle_code(work, [
      "Four ",
      "5",
      "s would be too many: ",
      "17 - 5 - 5 - 5 - 5",
      " is ",
      "-3",
    ]);
    html_div_cycle_code(work, [
      "",
      "-3",
      " is below zero, so three ",
      "5",
      "s is the most we can subtract",
    ]);
    let result = app_code_container_light_blue(root);
    html_div_cycle_code(result, [
      "So ",
      "2",
      " is what remains after we kept subtracting ",
      "5",
      " from ",
      "17",
    ]);
    html_div_cycle_code(result, ["So we write ", "17 % 5 === 2"]);
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, [
      "",
      percent,
      " means we keep subtracting the second number from the first number until what remains is smaller than the second number",
    ]);
    let named = html_div(define);
    html_span_text(named, "When we ");
    html_span_text_code_dark(named, percent);
    html_span_text(named, ", what remains is called the ");
    let word = html_span_text(named, "remainder");
    html_bold(word);
  }
}
