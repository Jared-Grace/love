import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_bold_term } from "./app_code_lesson_bold_term.mjs";
export function app_code_lesson_expression_quotient() {
  "identify the QUOTIENT (the whole result of dividing and rounding down) in Math.floor(a / b) === c - the dividend a and divisor b stand as decoys; a thin lesson over app_code_lesson_operand_generic. The question shows the honest Math.floor form (a / b === c alone would be false, since a / b is a decimal), and the quotient c must appear as a number so it can be a choice";
  function make(divisor) {
    "Math.floor(dividend / divisor) === quotient - dividend = quotient*divisor + a leftover so the division is uneven and the quotient is a real rounding-down; the answer is the quotient, with the dividend and divisor as decoys";
    let quotient = integer_random(2, 3);
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let question = text_combine_multiple([
      "Math.floor(",
      division,
      ") === ",
      text_to(quotient),
    ]);
    let answer = text_to(quotient);
    return {
      question,
      answer,
    };
  }
  function batch_get() {
    "four divisions, each with a DIFFERENT divisor so the questions never look alike";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    return list_map(divisors, make);
  }
  let name_id = title_name_id();
  return app_code_lesson_operand_generic({
    role: "quotient",
    batch_get,
    above,
    name_id,
  });
  function title_name_id() {
    "the home title is console.log quotient";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Quotient");
      }
      return render;
    }
    return app_code_lesson_name_id_generic(["quotient"], "operators", title_get);
  }
  function above(root) {
    let intro = app_code_container_light_blue(root);
    app_code_lesson_bold_term(
      intro,
      "When you divide and round down, the whole result is the ",
      "quotient",
    );
    html_div_cycle_code(intro, [
      "In ",
      "Math.floor(14 / 4) === 3",
      " the quotient is ",
      "3",
    ]);
    let ask = app_code_container_light_blue(root);
    html_div_cycle_code(ask, ["Choose the quotient"]);
  }
}
