import { app_code_lesson_naming_words } from "./app_code_lesson_naming_words.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
import { app_code_uneven_dividend_only } from "./app_code_uneven_dividend_only.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_dividend() {
  "identify the DIVIDEND (the number being divided) in a division a / b - the divisor b stands as the decoy; a thin lesson over the shared identify-an-operand generic";
  function make(divisor, quotient) {
    "a division whose dividend is quotient*divisor + a leftover; the answer is the dividend and the divisor is the decoy button. When quotient is 0 the dividend is smaller than the divisor (e.g. 2 / 3), so the dividend is still whichever number is divided, even when it is the smaller one";
    let dividend = app_code_uneven_dividend_only(quotient, divisor);
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
    "the home title says Naming the dividend and then shows where in a division the dividend stands: the part in front of the slash";
    function paint(parent) {
      app_code_lesson_naming_words(parent, "dividend");
      app_code_code_tile(parent, fill);
    }
    function fill(host) {
      "a gap and then the slash, so the shape says the dividend is whatever stands in front of the dividing";
      app_code_placeholder_dots(host);
      let slash = js_operator_division_symbol();
      let words = text_combine(" ", slash);
      html_span_text(host, words);
    }
    let name_id2 = app_code_lesson_name_id_operators(paint);
    return name_id2;
  }
}
