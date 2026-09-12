import { app_code_lesson_naming_words } from "./app_code_lesson_naming_words.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
import { app_code_uneven_division_code } from "./app_code_uneven_division_code.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { app_code_lesson_operand_generic } from "./app_code_lesson_operand_generic.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_divisor() {
  "identify the DIVISOR (the number you divide by) in a division a / b - the dividend a stands as the decoy; a thin lesson over the shared identify-an-operand generic";
  function make(divisor, quotient) {
    "a division whose divisor is the answer; the dividend (quotient*divisor + a leftover) is the decoy button. When quotient is 0 the dividend is the smaller number (e.g. 2 / 3), so the divisor is still the number you divide BY, even when it is the larger one";
    let question = app_code_uneven_division_code(quotient, divisor);
    let answer = text_to(divisor);
    let r = {
      question,
      answer,
    };
    return r;
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 case where the divisor is the larger number";
    let list = app_code_lesson_divisor_quotient_batch(make);
    return list;
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_operand_generic({
    role: "divisor",
    define_prose: "When you divide, the number you divide by is called the ",
    batch_get,
    name_id,
    unscramble: true,
  });
  return lesson;
  function title_name_id() {
    "the home title says Naming the divisor and then shows where in a division the divisor stands: the part after the slash";
    function paint(parent) {
      app_code_lesson_naming_words(parent, "divisor");
      app_code_code_tile(parent, fill);
    }
    function fill(host) {
      "the slash and then a gap, so the shape says the divisor is whatever the dividing is by";
      let slash = js_operator_division_symbol();
      let words = text_combine(slash, " ");
      html_span_text(host, words);
      app_code_placeholder_dots(host);
    }
    let name_id2 = app_code_lesson_name_id_operators(paint);
    return name_id2;
  }
}
