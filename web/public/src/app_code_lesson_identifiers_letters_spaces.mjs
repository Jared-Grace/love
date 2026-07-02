import { html_div_cycle_bold } from "../../../love/public/src/html_div_cycle_bold.mjs";
import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
import { languages_popular } from "../../../love/public/src/languages_popular.mjs";
import { list_to_text_or_list } from "../../../love/public/src/list_to_text_or_list.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_slices_size_random } from "../../../love/public/src/list_slices_size_random.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { app_code_lesson_symbols_digits_numbered_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
import { equal_0 } from "../../../love/public/src/equal_0.mjs";
export function app_code_lesson_identifiers_letters_spaces() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let lp = languages_popular();
    let combined2 = list_to_text_or_list(lp);
    let combined = text_combine_multiple([
      "Humans use languages like ",
      combined2,
      " to speak to each other",
    ]);
    html_div_text(c, combined);
    const parts = [
      "For a human to talk to a computer, the human can use a ",
      "programming language",
    ];
    html_div_cycle_bold(c, parts);
    html_cycle_bold(c, [
      "The programming language we will learn now is called ",
      "JavaScript",
    ]);
    html_div_text(
      c,
      "In English, letters are inside words, words are inside sentences and sentences are inside paragraphs",
    );
    html_div_text(
      c,
      "In JavaScript, symbols are a basic building block like letters in English",
    );
    html_div_text(
      c,
      "We can give names to people, cities, countries, mountains, rivers, etc.",
    );
    html_cycle_bold(c, [
      "In JavaScript, the name of something is called an ",
      "identifier",
    ]);
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
      if (ne) {
        app_code_lesson_symbols_digits_numbered_on_symbol(parent, index_1);
      }
    }
  }
  let r5 = app_code_lesson_symbols_digits_generic(
    "Identifiers (Letters allowed, spaces not)",
    "identifiers_letters_spaces",
    lambda,
    lambda4,
    batch_get,
  );
  return r5;
}
