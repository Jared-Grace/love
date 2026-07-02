import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { log } from "../../../love/public/src/log.mjs";
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
    html_div_text(
      c,
      "We can give names to people, cities, countries, mountains, rivers, etc.",
    );
    html_div_cycle_bold(c, [
      "In JavaScript, the name of something is called an ",
      "identifier",
    ]);
    html_div_text_multiple(c, [
      "In English, letters are inside words, words are inside sentences and sentences are inside paragraphs",
      "In English, letters are a basic building block and in JavaScript, symbols are a basic building block",
      "In English, letters are inside words and in JavaScript, symbols are inside identifiers",
      "Identifiers can have different kinds of symbols including letter symbols",
      "But identifiers cannot have space symbols",
    ]);
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list2 = list_slices_size_cycles_shuffled(mapped, 1, 2);
    log(app_code_lesson_identifiers_letters_spaces.name, {
      list2,
      mapped,
    });
    let list_other = js_identifier_words_invalid();
    let difference = list_difference(list2, list_other);
    function lambda2(item) {}
    let mapped2 = list_map(list, lambda2);
    let split = text_split_empty(difference);
    return split;
  }
  let r5 = app_code_lesson_symbols_identifiers_valid(
    "Identifiers (Letters allowed, spaces not)",
    "identifiers_letters_spaces",
    lambda,
    noop,
    batch_get,
  );
  return r5;
}
