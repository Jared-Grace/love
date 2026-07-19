import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_remainder_divide() {
  "the LAST step of finding a remainder by dividing: subtract the whole part (quotient * divisor) from the number, and what is left is the remainder - 14 - 12 is 2, the same as 14 % 4; this closes the divide pipeline (integer division -> whole part -> this subtraction) and is the fast counterpart to finding the remainder by repeated subtraction; the answer is the leftover; divisor 3..6, quotient 2..3, leftover 1..divisor-1";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  function make(divisor) {
    "number - whole_part for the given divisor, where number = quotient*divisor + leftover and whole_part = quotient*divisor, so the subtraction always leaves the true remainder (1..divisor-1)";
    let quotient = integer_random(2, 3);
    let leftover = integer_random(1, subtract(divisor, 1));
    let number = add(multiply(quotient, divisor), leftover);
    let whole_part = multiply(quotient, divisor);
    let code = js_code_binary_spaced_nb(number, "-", whole_part);
    return code;
  }
  function refill() {
    "four questions, each with a DIFFERENT divisor so two never look alike";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    let list = list_map(divisors, make);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
  });
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
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "You found the whole part - as much of the number as splits evenly into the divisor",
    ]);
    html_div_cycle_code(c, [
      "",
      "14 / 4",
      " is ",
      "3",
      " and ",
      "3 * 4",
      " is ",
      "12",
    ]);
    html_div_cycle_code(c, [
      "Subtract the whole part from the number to find what is left over",
    ]);
    html_div_cycle_code(c, ["", "14 - 12", " is ", "2"]);
    html_div_cycle_code(c, ["", "2", " is the remainder"]);
    html_div_cycle_code(c, ["This is the same as ", "14 % 4"]);
  }
}
