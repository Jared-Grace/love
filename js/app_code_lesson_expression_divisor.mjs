import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_divisor() {
  "identify the DIVISOR (the number you divide by) in a division a / b - the dividend a stands as the decoy; a thin lesson over app_code_lesson_operand_generic";
  function make(divisor, quotient) {
    "a division whose divisor is the answer; the dividend (quotient*divisor + a leftover) is the decoy button. When quotient is 0 the dividend is the smaller number (e.g. 2 / 3), so the divisor is still the number you divide BY, even when it is the larger one";
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let question = js_code_binary_spaced_nb(dividend, "/", divisor);
    let answer = text_to(divisor);
    return {
      question,
      answer,
    };
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 case where the divisor is the larger number";
    return app_code_lesson_divisor_quotient_batch(make);
  }
  let name_id = title_name_id();
  return app_code_lesson_operand_generic({
    role: "divisor",
    define_prose: "When you divide, the number you divide by is called the ",
    batch_get,
    name_id,
    unscramble: true,
  });
  function title_name_id() {
    "the home title is console.log divisor";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Divisor");
      }
      return render;
    }
    return app_code_lesson_name_id_generic(["divisor"], "operators", title_get);
  }
}
