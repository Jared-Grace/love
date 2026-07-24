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
export function app_code_lesson_expression_remainder_divide_solve() {
  "SOLVE the remainder-by-dividing formula: given a - Math.floor(a / b) * b, work out its value - the remainder. The learner has already solved each sub-part (Math.floor(a / b) in integer division, then * b for the whole part), so this is the one added step: subtract the whole part from the dividend. The answer is the leftover (the remainder); quotient 2..3, divisor 3..6";
  function make(divisor) {
    "the full remainder formula dividend - Math.floor(dividend / divisor) * divisor for the given divisor; the dividend is quotient*divisor + a leftover of 1..divisor-1 so the division is uneven and the formula works out to that leftover - the remainder";
    let quotient = integer_random(2, 3);
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let whole_part = text_combine_multiple([
      "Math.floor(",
      division,
      ") * ",
      text_to(divisor),
    ]);
    let code = text_combine_multiple([text_to(dividend), " - ", whole_part]);
    return code;
  }
  function refill() {
    "four questions, each with a DIFFERENT divisor so two never look alike";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    let list = list_map(divisors, make);
    return list;
  }
  function decoys(question, answer) {
    "tempting wrong values: the WHOLE PART (dividend - answer - stopped at the whole part, forgot to subtract it from the dividend), the QUOTIENT (whole part / divisor - stopped at Math.floor), and the raw decimal division (dividend / divisor). All fall out of the formula's numbers - dividend is the first integer, divisor the third (the one inside Math.floor's division)";
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 2);
    let whole_part = subtract(dividend, answer);
    let quotient = divide(whole_part, divisor);
    let raw = divide(dividend, divisor);
    return [whole_part, quotient, raw];
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
    "the home title is console.log solve the remainder formula";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Solve the remainder formula");
      }
      return render;
    }
    let rights = ["solve the remainder formula"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let recall = app_code_container_light_blue(root);
    html_div_cycle_code(recall, [
      "Remember, the remainder of ",
      "14 / 4",
      " is ",
      "14 - Math.floor(14 / 4) * 4",
    ]);
    let solving = app_code_container_light_blue(root);
    html_div_cycle_code(solving, ["Solve the formula one step at a time:"]);
    html_div_cycle_code(solving, ["", "Math.floor(14 / 4)", " is ", "3"]);
    html_div_cycle_code(solving, ["", "Math.floor(14 / 4) * 4", " is ", "12"]);
    html_div_cycle_code(solving, [
      "",
      "14 - Math.floor(14 / 4) * 4",
      " is ",
      "14 - 12",
    ]);
    html_div_cycle_code(solving, ["", "14 - 12", " is ", "2"]);
  }
}
