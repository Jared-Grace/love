import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_cycle_mono_list_between_comma_space_before_after } from "../../../love/public/src/html_cycle_mono_list_between_comma_space_before_after.mjs";
import { text_alphabet_lower } from "../../../love/public/src/text_alphabet_lower.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_letters() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    let alphabet_lower_unsplit = text_alphabet_lower();
    let alphabet_lower = text_split_empty(alphabet_lower_unsplit);
    html_cycle_mono_list_between_comma_space_before_after(
      div,
      "In English, there are 26 letters of the alphabet: ",
      alphabet_lower_unsplit,
      "",
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
