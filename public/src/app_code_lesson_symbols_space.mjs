import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_slices_size_random } from "../../../love/public/src/list_slices_size_random.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { app_code_lesson_symbols_digits_numbered_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
import { equal_0 } from "../../../love/public/src/equal_0.mjs";
export function app_code_lesson_symbols_space() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    html_div_text(
      div,
      "In English, when writing, we use spaces to separate words",
    );
    html_div_text(div, "For a computer, a space is considered a symbol");
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list2 = list_slices_size_random(mapped, 2, 3);
    return list2;
  }
  function lambda4(parent, index_1, symbols) {
    let r = mod(index_1, 5);
    let eq = equal_0(r);
    if (eq) {
      let size = list_size(symbols);
      let ne = equal_not(index_1, size);
      if (false) {
      }
      app_code_lesson_symbols_digits_numbered_on_symbol(parent, index_1);
    }
  }
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Space)",
    "symbols_space",
    lambda,
    lambda4,
    batch_get,
  );
  return r5;
}
