import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { list_join } from "./list_join.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_remainder_subtract() {
  "practice a % b (remainder) by writing it out as repeated subtraction (17 % 5 becomes 17 - 5 - 5 - 5): the quiz matches the % form with its subtraction chain, because this lesson teaches what % MEANS - take the divisor away again and again until what is left is smaller than it, and that leftover is the remainder - not the closed-form value; divisor 3..6, 2 or 3 subtractions, leftover 1..divisor-1";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  function subtract_code(number, divisor, count) {
    "the remainder worked out as repeated subtraction - subtract_code(17, 5, 3) is 17 - 5 - 5 - 5: the number, then the divisor taken away count times";
    let minus = js_operator_minus_symbol();
    function divisor_text(index) {
      return text_to(divisor);
    }
    let subtractions = list_map(range(count), divisor_text);
    let terms = list_concat_single(text_to(number), subtractions);
    let separator = text_combine_multiple([" ", minus, " "]);
    let chain = list_join(terms, separator);
    return chain;
  }
  function batch_get() {
    "four questions - four distinct divisors (so the chains never look alike), each with its own count of subtractions (2 or 3, so the chain length varies) and its own leftover, so the number worked on is count*divisor + leftover and the subtraction always stops one short of going negative; the ANSWER is the subtraction chain, not the value";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    function to_pair(divisor) {
      let count = integer_random(2, 3);
      let leftover = integer_random(1, subtract(divisor, 1));
      let number = add(multiply(count, divisor), leftover);
      let question = js_code_binary_spaced_nb(number, percent, divisor);
      let answer = subtract_code(number, divisor, count);
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
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "You already know how to subtract like ",
      "20 - 5 - 5",
    ]);
    html_div_cycle_code(c, [
      "What if you keep subtracting the same number until you can not take it away again?",
    ]);
    html_div_cycle_code(c, [
      "",
      "17 - 5 - 5 - 5",
      " leaves ",
      "2",
    ]);
    html_div_cycle_code(c, [
      "We stop because ",
      "2",
      " is smaller than ",
      "5",
    ]);
    html_div_cycle_code(c, ["What is left over is the remainder"]);
    html_div_cycle_code(c, [
      "We write ",
      "17 % 5",
      " for this",
    ]);
    html_div_cycle_code(c, [
      "Keep subtracting the second number until what is left is smaller than it",
    ]);
  }
}
