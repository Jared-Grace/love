import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { list_get } from "./list_get.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_whole_part() {
  "practice the whole part in finding a remainder: the quotient (how many whole times the number divides) times the divisor gives the biggest multiple of the divisor that fits - 3 whole 4s is 3 * 4 which is 12, and 12 is as much of 14 as splits evenly into 4s; this is the multiply step of the remainder pipeline (integer division gave the quotient, next you subtract this whole part from the number); the answer is the product; quotient 2..3, divisor 3..6";
  function make(divisor) {
    "Math.floor(dividend / divisor) * divisor for the given divisor - the dividend is quotient*divisor + a leftover of 1..divisor-1 so the division never comes out even; Math.floor gives the quotient and times the divisor gives the whole part (the biggest multiple of the divisor that fits), so the answer is quotient*divisor";
    let quotient = integer_random(2, 3);
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let floored = text_combine_multiple(["Math.floor(", division, ")"]);
    let code = text_combine_multiple([floored, " * ", text_to(divisor)]);
    return code;
  }
  function refill() {
    "four questions, each with a DIFFERENT divisor so two never look alike";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    let list = list_map(divisors, make);
    return list;
  }
  function decoys(question, answer) {
    "tailored wrong answers: the QUOTIENT alone (answer / divisor - forgot to multiply back by the divisor) and the REMAINDER (dividend - answer - the leftover, confused with the whole part). Both fall out of the question's numbers Math.floor(dividend / divisor) * divisor";
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let quotient = divide(answer, divisor);
    let remainder = subtract(dividend, answer);
    return [quotient, remainder];
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
    "the home title is console.log whole part";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Whole part");
      }
      return render;
    }
    let rights = ["whole part"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let naming = app_code_container_light_blue(root);
    html_div_cycle_code(naming, ["", "Math.floor(14 / 4) === 3"]);
    html_div_cycle_code(naming, ["The ", "14", " is called the dividend"]);
    html_div_cycle_code(naming, ["The ", "4", " is called the divisor"]);
    html_div_cycle_code(naming, ["The ", "3", " is called the quotient"]);
    let evaluating = app_code_container_light_blue(root);
    html_div_cycle_code(evaluating, [
      "Evaluate the formula one step at a time:",
    ]);
    html_div_cycle_code(evaluating, ["", "Math.floor(14 / 4)", " is ", "3"]);
    html_div_cycle_code(evaluating, [
      "",
      "Math.floor(14 / 4) * 4",
      " is ",
      "3 * 4",
    ]);
    html_div_cycle_code(evaluating, ["", "3 * 4", " is ", "12"]);
  }
}
