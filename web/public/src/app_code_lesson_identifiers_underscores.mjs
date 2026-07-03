import { html_cycle_mono_multiple } from "../../../love/public/src/html_cycle_mono_multiple.mjs";
import { js_identifier_words_invalid } from "../../../love/public/src/js_identifier_words_invalid.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_slices_size_cycles_shuffled } from "../../../love/public/src/list_slices_size_cycles_shuffled.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_identifiers_valid } from "../../../love/public/src/app_code_lesson_symbols_identifiers_valid.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_identifiers_underscores() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    html_div_text_multiple(c, [
      "Remember, identifiers can have different kinds of symbols including letter symbols",
    ]);
    html_cycle_mono_multiple(c, [
      ["Identifiers can also have an ", "_", " (underscore) symbol"],
      ["But identifiers cannot have a ", "-", " (hyphen) symbol, a "],
    ]);
    html_cycle_mono_multiple(c, [
      ["Identifiers can also have a ", "$", "(dollar sign)"],
      ["But identifiers cannot have a ", ".", " (period) symbol"],
    ]);
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list2 = list_slices_size_cycles_shuffled(mapped, 1, 2);
    let list_other = js_identifier_words_invalid();
    let difference = list_difference(list2, list_other);
    return difference;
  }
  let r5 = app_code_lesson_symbols_identifiers_valid(
    "Identifiers (Underscores allowed, hyphens not)",
    "identifiers_underscores",
    lambda,
    noop,
    batch_get,
  );
  return r5;
}
