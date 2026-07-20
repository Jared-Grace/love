import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_quotient() {
  "identify the QUOTIENT (the whole result of dividing and rounding down) in Math.floor(a / b) === c - the dividend a and divisor b stand as decoys; a thin lesson over app_code_lesson_operand_generic. The question shows the honest Math.floor form (a / b === c alone would be false, since a / b is a decimal) and the quotient c must appear as a number so it can be a choice";
  function make(divisor, quotient) {
    "Math.floor(dividend / divisor) === quotient - dividend = quotient*divisor + a leftover so the division is uneven; the answer is the quotient, with the dividend and divisor as decoys. When quotient is 0 the dividend is smaller than the divisor (e.g. Math.floor(2 / 3) === 0), the edge case where the answer to pick is 0 itself";
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
    "the shared integer-division-family batch: four different divisors, one a quotient-0 case where the answer to pick is 0";
    return app_code_lesson_divisor_quotient_batch(make);
  }
  let name_id = title_name_id();
  return app_code_lesson_operand_generic({
    role: "quotient",
    define_prose: "When you divide and round down, the whole result is the ",
    batch_get,
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
}
