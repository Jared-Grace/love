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
export function app_code_lesson_expression_dividend() {
  "identify the DIVIDEND (the number being divided) in a division a / b - the divisor b stands as the decoy; a thin lesson over app_code_lesson_operand_generic";
  function make(divisor, quotient) {
    "a division whose dividend is quotient*divisor + a leftover; the answer is the dividend and the divisor is the decoy button. When quotient is 0 the dividend is smaller than the divisor (e.g. 2 / 3), so the dividend is still whichever number is divided, even when it is the smaller one";
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let question = js_code_binary_spaced_nb(dividend, "/", divisor);
    let answer = text_to(dividend);
    return {
      question,
      answer,
    };
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 case where the dividend is the smaller number";
    return app_code_lesson_divisor_quotient_batch(make);
  }
  let name_id = title_name_id();
  return app_code_lesson_operand_generic({
    role: "dividend",
    define_prose: "When you divide, the number you divide is the ",
    batch_get,
    name_id,
    unscramble: true,
  });
  function title_name_id() {
    "the home title is console.log dividend";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Dividend");
      }
      return render;
    }
    return app_code_lesson_name_id_generic(["dividend"], "operators", title_get);
  }
}
