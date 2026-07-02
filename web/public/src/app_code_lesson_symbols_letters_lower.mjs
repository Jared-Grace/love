import { list_alphabet_upper } from "../../../love/public/src/list_alphabet_upper.mjs";
import { app_code_lesson_symbols_letters_batch } from "../../../love/public/src/app_code_lesson_symbols_letters_batch.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_text_characters_numbered } from "../../../love/public/src/html_text_characters_numbered.mjs";
import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { list_alphabet_lower } from "../../../love/public/src/list_alphabet_lower.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_letters_lower() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    let span2 = html_span_text(
      div,
      "In English, there are 26 letters in the alphabet: ",
    );
    let div2 = html_div(c);
    let alphabet_lower = list_alphabet_lower();
    html_text_characters_numbered(div2, alphabet_lower);
    let div3 = html_div(c);
    html_cycle_bold(div3, [
      "Those 26 letters are written in ",
      "lowercase",
      ".",
    ]);
    let container = app_code_container_light_blue(root);
    let div4 = html_div(container);
    html_cycle_bold(div4, [
      "Here are the 26 English letters written in ",
      "uppercase",
      ":",
    ]);
    let div5 = html_div(container);
    let alphabet_upper = list_alphabet_upper();
    html_text_characters_numbered(div5, alphabet_upper);
    let container2 = app_code_container_light_blue(root);
    html_div_text(container2, "Remember, numbers are examples of symbols");
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
      "For a computer, lowercase symbols may be considered different than uppercase symbols",
    );
  }
  function lambda2() {}
  let batch_symbols = app_code_lesson_symbols_letters_batch(lambda2);
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Letters)",
    "symbols_letters",
    lambda,
    noop,
    batch_symbols,
  );
  return r5;
}
