import { mod } from "../../../love/public/src/mod.mjs";
import { app_code_lesson_symbols_digits_numbered_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_join_space_nb } from "../../../love/public/src/list_join_space_nb.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_next } from "../../../love/public/src/each_next.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
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
    function lambda3(la) {
      function lambda2(word, next) {
        let pair = [word, next];
        let joined = list_join_space_nb(pair);
        let split = text_split_empty(joined);
        la(split);
      }
      each_next(mapped, lambda2);
    }
    let list2 = list_adder(lambda3);
    return list2;
  }
  function lambda4(parent, index_1) {
    let r = mod(n, m);
    app_code_lesson_symbols_digits_numbered_on_symbol(parent, index_1);
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
