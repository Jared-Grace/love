import { app_code_symbol_separated } from "../../../love/public/src/app_code_symbol_separated.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_underscores_define_symbol.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
export function app_code_lesson_symbols_digits_2() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    app_code_lesson_underscores_define_symbol(c, "plus sign", "+");
    let div = html_div_text_multiple(c, [
      "In math, we use plus signs to add numbers together",
      "In JavaScript, a plus sign can add two numbers together",
    ]);
  }
  const example_label = "Number of symbols: ";
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = text_size;
  let r5 = app_code_lesson_symbols_batches_generic(
    name,
    id,
    lambda,
    noop,
    app_code_lesson_symbols_batch_digits,
    example_label,
    quiz_label,
    symbols_to_answer,
    1,
    app_code_symbol_separated,
  );
  let name = "Operators (Addition)";
  let id = "operators_addition";
  return r5;
}
