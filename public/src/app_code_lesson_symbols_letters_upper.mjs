import { text_upper_to } from "../../../love/public/src/text_upper_to.mjs";
import { app_code_lesson_symbols_letters_batch } from "../../../love/public/src/app_code_lesson_symbols_letters_batch.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_letters_upper() {
  function lambda(root) {
    return;
    html_div_text(
      container2,
      "Also, both uppercase and lowercase letters are examples of symbols",
    );
    html_div_text(
      container2,
      "When we write computer programs, we use symbols, including letters and numbers",
    );
    html_div_text(
      container2,
      "For a computer, lowercase symbols may be considered different symbols than uppercase",
    );
  }
  let batch_symbols = app_code_lesson_symbols_letters_batch(text_upper_to);
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Letters, Uppercase)",
    "symbols_letters_upper",
    lambda,
    noop,
    batch_symbols,
  );
  return r5;
}
