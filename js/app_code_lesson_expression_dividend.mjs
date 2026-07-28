import { app_code_uneven_dividend } from "./app_code_uneven_dividend.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_dividend() {
  "identify the DIVIDEND (the number being divided) in a division a / b - the divisor b stands as the decoy; a thin lesson over the shared identify-an-operand generic";
  function make(divisor, quotient) {
    "a division whose dividend is quotient*divisor + a leftover; the answer is the dividend and the divisor is the decoy button. When quotient is 0 the dividend is smaller than the divisor (e.g. 2 / 3), so the dividend is still whichever number is divided, even when it is the smaller one";
    let parts = app_code_uneven_dividend(quotient, divisor);
    let dividend = property_get(parts, "dividend");
    let question = js_code_binary_spaced_nb(dividend, "/", divisor);
    let answer = text_to(dividend);
    let r = {
      question,
      answer,
    };
    return r;
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 case where the dividend is the smaller number";
    let list = app_code_lesson_divisor_quotient_batch(make);
    return list;
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_operand_generic({
    role: "dividend",
    define_prose: "When you divide, the number you divide is called the ",
    batch_get,
    name_id,
    unscramble: true,
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log dividend";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Dividend");
      }
      return render;
    }
    let name_id2 = app_code_lesson_name_id_generic(
      ["dividend"],
      "operators",
      title_get,
    );
    return name_id2;
  }
}
