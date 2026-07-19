import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_whole_part() {
  "practice the whole part in finding a remainder: the quotient (how many whole times the number divides) times the divisor gives the biggest multiple of the divisor that fits - 3 whole 4s is 3 * 4 which is 12, and 12 is as much of 14 as splits evenly into 4s; this is the multiply step of the remainder pipeline (integer division gave the quotient, next you subtract this whole part from the number); the answer is the product; quotient 2..3, divisor 3..6";
  function make(divisor) {
    "quotient * divisor for the given divisor - the quotient is 2 or 3, the count of whole divisors that fit";
    let quotient = integer_random(2, 3);
    let code = js_code_binary_spaced_nb(quotient, "*", divisor);
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
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "To find a remainder, you first find how many whole times the number divides",
    ]);
    html_div_cycle_code(c, [
      "",
      "14 / 4",
      " rounds down to ",
      "3",
      ", so ",
      "3",
      " whole 4s fit",
    ]);
    html_div_cycle_code(c, ["Multiply to see how much those whole 4s cover"]);
    html_div_cycle_code(c, ["", "3 * 4", " is ", "12"]);
    html_div_cycle_code(c, [
      "",
      "12",
      " is the whole part - all of 14 that splits evenly into 4s",
    ]);
    html_div_cycle_code(c, [
      "The remainder is whatever is left after ",
      "12",
    ]);
  }
}
