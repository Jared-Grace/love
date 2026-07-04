import { list_join_space_nb } from "../../../love/public/src/list_join_space_nb.mjs";
import { js_identifier_words_invalid } from "../../../love/public/src/js_identifier_words_invalid.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_slices_size_cycles_shuffled } from "../../../love/public/src/list_slices_size_cycles_shuffled.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_identifiers_valid } from "../../../love/public/src/app_code_lesson_symbols_identifiers_valid.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
import { html_div_cycle_bold } from "../../../love/public/src/html_div_cycle_bold.mjs";
import { languages_popular } from "../../../love/public/src/languages_popular.mjs";
import { list_to_text_or_list } from "../../../love/public/src/list_to_text_or_list.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
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
    html_div_cycle_bold(c, [
      "The programming language we will learn now is called ",
      "JavaScript",
    ]);
    let c2 = app_code_container_light_blue(root);
    html_div_text(
      c2,
      "We can give names to people, cities, countries, mountains, rivers, etc.",
    );
    html_div_cycle_bold(c2, [
      "In JavaScript, ",
      "identifiers",
      " are used as names",
    ]);
    let c4 = app_code_container_light_blue(root);
    html_div_text_multiple(c4, [
      "In English, letters are inside of words, words are inside of sentences and sentences are inside of paragraphs",
      "In English, letters are a basic building block and in JavaScript, symbols are a basic building block",
      "In English, letters are inside of words and in JavaScript, symbols (like letters) are inside of identifiers",
    ]);
    let c3 = app_code_container_light_blue(root);
    html_div_text_multiple(c3, [
      "Identifiers can have different kinds of symbols including letters",
      "But identifiers cannot have spaces",
    ]);
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list = list_slices_size_cycles_shuffled(mapped, 1, 2);
    let mapped2 = list_map(list, list_join_space_nb);
    let list_other = js_identifier_words_invalid();
    let difference = list_difference(mapped2, list_other);
    return difference;
  }
  let r5 = app_code_lesson_symbols_identifiers_valid(
    "Identifiers (Letters allowed, spaces not)",
    "identifiers_letters_spaces",
    lambda,
    noop,
    batch_get,
    app_code_symbol,
  );
  return r5;
}
