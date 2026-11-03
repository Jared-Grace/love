import { js_operator_percent_sign } from "./js_operator_percent_sign.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { integer_random } from "./integer_random.mjs";
import { integer_random_below } from "./integer_random_below.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_remainder_subtract_code } from "./app_code_lesson_expression_remainder_subtract_code.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_expression_remainder_subtract_title_name_id } from "./app_code_lesson_expression_remainder_subtract_title_name_id.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { list_without } from "./list_without.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_code_remainder_subtract_wrong_say } from "./app_code_remainder_subtract_wrong_say.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { app_code_lesson_expression_remainder_subtract_above } from "./app_code_lesson_expression_remainder_subtract_above.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
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
      let answer = app_code_lesson_expression_remainder_subtract_code(
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
  let name_id =
    app_code_lesson_expression_remainder_subtract_title_name_id(percent);
  let example_question_label = app_code_label_code_question();
  ("The wrong answers hold only the numbers on the screen. Filled from the other questions they held other numbers, so the one button with the numbers on the screen was the answer every time and could be picked without knowing what % does.");
  ("Forwards they take the number away too few times or too many, which is the stopping rule this lesson teaches: stop when what is left is smaller. The right count is always 2 or 3, so counts 1 to 4 less the right one always leave exactly three.");
  ("Backwards they put the two numbers the wrong way round or use one of them twice, which asks which number is taken from and which is taken away. None comes to the same value, because the right value is at least 1 and under the number taken away, and these come to 0 or to the number taken away. Not picked: how many times it was taken away as the second number, 16 % 3, because it can come to the same value as the right answer; and / or - in place of %, because the question asks for the code using %, so those go without any thought.");
  function chain_parts(chain) {
    "[the number, the number taken away, how many times] read back from 16 - 5 - 5 - 5";
    let terms = text_split(chain, " - ");
    let number = list_first(terms);
    let divisor = list_get(terms, 1);
    let left = list_size(terms);
    let count = subtract(left, 1);
    let parts = [number, divisor, count];
    return parts;
  }
  function decoys_forwards(question, answer) {
    "the same two numbers, taken away too few times or too many";
    let parts = chain_parts(answer);
    let number = list_first(parts);
    let divisor = list_get(parts, 1);
    let count_right = list_get(parts, 2);
    let counts = list_without([1, 2, 3, 4], count_right);
    function chain_of(count) {
      let chain = app_code_lesson_expression_remainder_subtract_code(
        number,
        divisor,
        count,
      );
      return chain;
    }
    let found = list_map(counts, chain_of);
    return found;
  }
  function decoys_backwards(question, answer) {
    "the two numbers the wrong way round, and each of them on both sides";
    let parts = chain_parts(question);
    let number = list_first(parts);
    let divisor = list_get(parts, 1);
    let swapped = js_code_binary_spaced_nb(divisor, percent, number);
    let number_twice = js_code_binary_spaced_nb(number, percent, number);
    let divisor_twice = js_code_binary_spaced_nb(divisor, percent, divisor);
    let found = [swapped, number_twice, divisor_twice];
    return found;
  }
  let forwards = {
    question_label: example_question_label,
    on_question: html_text_set_code_dark,
    answer_label: "What is this worked out by subtracting? ",
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
    wrong_say: app_code_remainder_subtract_wrong_say,
    decoys: decoys_forwards,
  };
  let backwards = {
    question_label: "Subtraction: ",
    on_question: html_text_set_code_dark,
    answer_label: "Which code uses % for this? ",
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
    wrong_say: app_code_remainder_subtract_wrong_say,
    decoys: decoys_backwards,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble_both({
    batch_get,
    forwards,
    backwards,
  });
  let above = app_code_lesson_expression_remainder_subtract_above;
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
}
