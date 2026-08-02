import { divide_floor } from "./divide_floor.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { app_code_remainder_percent_labels } from "./app_code_remainder_percent_labels.mjs";
import { object_merge } from "./object_merge.mjs";
import { multiply } from "./multiply.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
import { list_get } from "./list_get.mjs";
import { text_integers } from "./text_integers.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_remainder_any() {
  "practice the remainder % with a mix of divisors; the intro DEFINES the remainder via the formula (dividend - Math.floor(n / d) * d, learned in the remainder-by-dividing lessons) rather than pointing back to the 2/3/4 lessons; both the number and the divisor vary each question";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  function make(divisor) {
    "n % d for the given divisor, with the number from 5 to 20 so it is a real division rather than a tiny one";
    let number = integer_random(5, 20);
    let code = js_code_binary_spaced_nb(number, percent, divisor);
    return code;
  }
  function divisor_of(index) {
    "the divisors 2 through 9";
    let sum = add(index, 2);
    return sum;
  }
  function refill() {
    "four questions, each with a DIFFERENT divisor, so two examples (or answer choices) never come out identical";
    let divisors = range_map(8, divisor_of);
    let list = list_shuffle_take_map(divisors, 4, make);
    return list;
  }
  function decoys(question, answer) {
    "three tempting wrong values, matching the mistakes the formula makes visible: the QUOTIENT floor(n / d) (how many whole times the divisor fits - stopped before finding what is left over), the WHOLE PART floor(n / d) * d (the part that divides evenly - forgot to subtract it from the dividend), and the RAW division n / d (never rounded down)";
    let nums = text_integers(question);
    let number = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let quotient = divide_floor(number, divisor);
    let whole_part = multiply(quotient, divisor);
    let raw = divide(number, divisor);
    let r = [quotient, whole_part, raw];
    return r;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let params = {
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
  };
  let from2 = app_code_remainder_percent_labels();
  object_merge(params, from2);
  let lesson = app_code_lesson_expression_generic(params);
  return lesson;
  function title_name_id() {
    "the home title is console.log remainder % (no 'by <divisor>', since the divisor now varies)";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Remainder ");
        html_span_text_code_dark(parent, percent);
      }
      return render;
    }
    let rights = ["remainder"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let derive = app_code_container_light_blue(root);
    html_div_cycle_code(derive, [
      "For ",
      "14 / 4",
      ", remember ",
      "14",
      " is the dividend",
    ]);
    html_div_cycle_code(derive, [
      "And ",
      "Math.floor(14 / 4) * 4",
      " is the whole part",
    ]);
    html_div_cycle_code(derive, ["Now we will subtract them from each other:"]);
    html_div_cycle_code(derive, ["", "14 - Math.floor(14 / 4) * 4"]);
    html_div_cycle_code(derive, ["This is the same as ", "14 % 4"]);
    html_div_cycle_code(derive, [
      "So ",
      "14 % 4",
      " is ",
      "14 - Math.floor(14 / 4) * 4",
    ]);
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, [
      "So the remainder ",
      percent,
      " is the dividend minus its whole part",
    ]);
    html_div_cycle_code(define, [
      "And this works the same way for any number we divide by",
    ]);
  }
}
