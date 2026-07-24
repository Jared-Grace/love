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
import { app_code_row_flex_center } from "./app_code_row_flex_center.mjs";
import { app_code_arrow } from "./app_code_arrow.mjs";
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
    html_div_cycle_code(result, ["", "14 - 12", " is ", "2"]);
    html_div_cycle_code(result, ["So ", "2", " is the remainder"]);
    html_div_cycle_code(result, ["This is the same as ", "14 % 4", " :"]);
    html_div_cycle_code(result, ["", "14 % 4 === 2"]);
  }
}
