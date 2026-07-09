import { app_code_symbols_separated_on_question_numbered_fifth } from "../../../love/public/src/app_code_symbols_separated_on_question_numbered_fifth.mjs";
import { app_code_lesson_symbols_digits_numbered_fifth_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_fifth_on_symbol.mjs";
import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
import { app_code_lesson_symbols_space_style } from "../../../love/public/src/app_code_lesson_symbols_space_style.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { list_join_space_nb } from "../../../love/public/src/list_join_space_nb.mjs";
import { list_slices_size_random } from "../../../love/public/src/list_slices_size_random.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_code_lesson_symbols_space() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    let nb = text_space_nb();
    let list = [
      text_combine("In English, when writing, we use", nb),
      text_combine_multiple([nb, "spaces", nb]),
      text_combine(nb, "to separate words"),
    ];
    let parts = list_between_space_nb(list);
    html_cycle(div, [noop, app_code_lesson_symbols_space_style], parts);
    html_div_text(
      c,
      "For a computer, a space is considered a symbol, just like a letter or a number",
    );
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list2 = list_slices_size_random(mapped, 2, 3);
    let mapped2 = list_map(list2, list_join_space_nb);
    return mapped2;
  }
  function lambda4(parent, index_1, symbols) {
    app_code_lesson_symbols_digits_numbered_fifth_on_symbol(
      parent,
      index_1,
      symbols,
    );
  }
  let r5 = app_code_lesson_symbols_counting(
    "Symbols (space)",
    "symbols_space",
    lambda,
    batch_get,
    app_code_symbols_separated_on_question_numbered_fifth,
  );
  return r5;
}
