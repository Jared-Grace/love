import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_to } from "./text_to.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_integer_division() {
  "practice integer division: how many WHOLE times the divisor fits into the number, written as Math.floor(number / divisor); dividing gives a decimal (14 / 4 is 3.5) and Math.floor throws the decimal away to leave the whole count (3); the answer is that whole number; divisor 3..6, quotient 2..3 with one quotient-0 edge case per batch (number smaller than the divisor, e.g. 5 / 6), leftover 1..divisor-1 so the division never comes out even";
  function make(divisor, quotient) {
    "one integer-division expression whose divisor does NOT divide evenly - number = quotient*divisor + leftover with a leftover of at least 1 - so discarding a real decimal is always needed. When quotient is 0 the number is SMALLER than the divisor (e.g. 5 / 6), the edge case where the divisor does not fit even once and the whole count is 0";
    let leftover = integer_random(1, subtract(divisor, 1));
    let number = add(multiply(quotient, divisor), leftover);
    let division = js_code_binary_spaced_nb(number, "/", divisor);
    let code = text_combine_multiple(["Math.floor(", division, ")"]);
    return code;
  }
  function refill() {
    "four questions, each with a DIFFERENT divisor so two examples never come out identical; exactly ONE has quotient 0 (the number smaller than the divisor) so the whole-count-0 edge case shows up occasionally, never every question";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    let quotients = [0, 2, 3, 3];
    list_shuffle(quotients);
    function pair(divisor, index) {
      let quotient = list_get(quotients, index);
      return make(divisor, quotient);
    }
    let list = list_map_index(divisors, pair);
    return list;
  }
  function decoys(question, answer) {
    "tailored wrong answers: the rounded-UP value (answer + 1, 'rounded up not down'), and the UN-FLOORED result dividend / divisor ('forgot to round down at all', e.g. 14 / 4 -> 3.5) when it displays as a short clean decimal - skipped for long repeating ones like 13 / 6";
    let list = [];
    list_add(list, add(answer, 1));
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let unfloored = divide(dividend, divisor);
    let unfloored_text = text_to(unfloored);
    let clean = text_regex_match(unfloored_text, /^[0-9]+(\.[0-9]{1,3})?$/);
    if (null_not_is(clean)) {
      list_add(list, unfloored_text);
    }
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log integer division";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Integer division");
      }
      return render;
    }
    let rights = ["integer division"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let recall = app_code_container_light_blue(root);
    html_div_cycle_code(recall, [
      "You know that ",
      "Math.floor",
      " rounds a number down",
    ]);
    let problem = app_code_container_light_blue(root);
    html_div_cycle_code(problem, ["Dividing does not always come out even"]);
    html_div_cycle_code(problem, ["For example, ", "14 / 4", " is ", "3.5"]);
    let solution = app_code_container_light_blue(root);
    html_div_cycle_code(solution, [
      "Now we will divide, and then round down to get a whole number:",
    ]);
    html_div_cycle_code(solution, ["", "Math.floor(14 / 4)", " is ", "3"]);
    html_div_cycle_code(solution, [
      "That is how many whole ",
      "4",
      "s fit into ",
      "14",
    ]);
    let subtracting = app_code_container_light_blue(root);
    html_div_cycle_code(subtracting, [
      "The ",
      "3",
      " is also how many times you can take ",
      "4",
      " away from ",
      "14",
      ":",
    ]);
    html_div_cycle_code(subtracting, ["", "14 - 4 - 4 - 4"]);
  }
}
