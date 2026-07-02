import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { list_alphabet_upper } from "../../../love/public/src/list_alphabet_upper.mjs";
import { html_text_characters_numbered } from "../../../love/public/src/html_text_characters_numbered.mjs";
import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { list_alphabet_lower } from "../../../love/public/src/list_alphabet_lower.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_letters() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    let span2 = html_span_text(
      div,
      "In English, there are 26 letters of the alphabet: ",
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
    html_cycle_bold(div4, ["Below are letters written in ", "uppercase", ":"]);
    let div5 = html_div(container);
    let alphabet_upper = list_alphabet_upper();
    html_text_characters_numbered(div5, alphabet_upper);
    let container2 = app_code_container_light_blue(root);
    html_div_text(container2, "Remember, numbers are examples of symbols");
    let div6 = html_div_text(
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
  let verse =
    "For God so loved the world that He gave His one and only Son that everyone who believes in Him shall not perish but have eternal life";
  let split = text_split_space(verse);
  function lambda2() {
    let batch_digits = list_map(split, text_split_empty);
    return batch_digits;
  }
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Letters)",
    "symbols_letters",
    lambda,
    noop,
    lambda2,
  );
  return r5;
}
