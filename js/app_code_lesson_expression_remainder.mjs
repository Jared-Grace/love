import { app_code_uneven_dividend } from "./app_code_uneven_dividend.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_remainder() {
  "identify the REMAINDER (what is left over) in a % b === r - the dividend a and divisor b stand as decoys; the sibling of the dividend / divisor / quotient identify lessons, a thin lesson over the shared identify-an-operand generic. The quotient is at least 1, so the dividend is always bigger than the divisor which is bigger than the remainder - all three numbers distinct, so the learner really has to know which is the remainder";
  function make(divisor) {
    "dividend % divisor === remainder - dividend = quotient*divisor + remainder with quotient 1..3 and remainder 1..divisor-1, so the three numbers dividend, divisor and remainder are all different; the answer is the remainder, with the dividend and divisor as decoys";
    let quotient = integer_random(1, 3);
    let parts = app_code_uneven_dividend(quotient, divisor);
    let dividend = property_get(parts, "dividend");
    let remainder = property_get(parts, "leftover");
    let division = js_code_binary_spaced_nb(dividend, "%", divisor);
    let t = text_to(remainder);
    let question = text_combine_multiple([division, " === ", t]);
    let answer = text_to(remainder);
    let pair = {
      question,
      answer,
    };
    return pair;
  }
  function batch_get() {
    "four questions, each with a different divisor 3..6 so the questions never look alike";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    let list = list_map(divisors, make);
    return list;
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_operand_generic({
    role: "remainder",
    define_prose:
      "What is left over after dividing as many whole times as you can is called the ",
    batch_get,
    name_id,
    above_more: remember_roles,
    unscramble: true,
  });
  return lesson;
  function remember_roles(root) {
    "remind all three roles at once, since the remainder question 17 % 5 === 2 shows the dividend, divisor and remainder together";
    let remember = app_code_container_light_blue(root);
    html_div_cycle_code(remember, ["", "17 % 5 === 2"]);
    html_div_cycle_code(remember, ["Remember:"]);
    html_div_cycle_code(remember, ["The ", "17", " is the dividend"]);
    html_div_cycle_code(remember, ["The ", "5", " is the divisor"]);
    html_div_cycle_code(remember, ["The ", "2", " is the remainder"]);
  }
  function title_name_id() {
    "the home title is console.log remainder";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Remainder");
      }
      return render;
    }
    ("the id-source differs from the plain role word because the operator lesson Remainder % already holds operators_remainder (its rights carry a stray leading space that collapses to the same id); the visible title stays Remainder");
    let rights = ["remainder part"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
}
