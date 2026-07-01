import { html_cycle_mono_list_between_comma_space_before_after } from "../../../love/public/src/html_cycle_mono_list_between_comma_space_before_after.mjs";
import { text_alphabet_lower } from "../../../love/public/src/text_alphabet_lower.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_letters() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let r = text_alphabet_lower();
    html_cycle_mono_list_between_comma_space_before_after(
      p3,
      "The numbers ",
      ds,
      " are called ",
    );
    let div = html_div_text(
      c,
      "In English, there are 26 letters of the alphabet: A through Z",
    );
  }
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Letters)",
    "symbols_letters",
    lambda,
    noop,
  );
  return r5;
}
