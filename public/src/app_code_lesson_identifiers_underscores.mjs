import { log } from "../../../love/public/src/log.mjs";
import { html_div_cycle_mono_multiple } from "../../../love/public/src/html_div_cycle_mono_multiple.mjs";
import { list_cycler } from "../../../love/public/src/list_cycler.mjs";
import { equal_2 } from "../../../love/public/src/equal_2.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_join_cycled } from "../../../love/public/src/list_join_cycled.mjs";
import { integer_even_is } from "../../../love/public/src/integer_even_is.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
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
    html_div_cycle_mono_multiple(c, [
      ["Identifiers can also have an ", "_", " (underscore) symbol"],
      ["But identifiers cannot have a ", "-", " (hyphen) symbol, a "],
    ]);
    html_div_cycle_mono_multiple(c, [
      ["Identifiers can also have a ", "$", " (dollar sign)"],
      ["But identifiers cannot have a ", ".", " (period) symbol"],
    ]);
  }
  function batch_get() {
    const separator_valid = "_";
    const separator_invalid = "-";
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let list = list_slices_size_cycles_shuffled(mapped, 2, 4);
    let separators_invalid_next = list_cycler([
      [separator_invalid],
      [separator_valid, separator_invalid],
      [separator_invalid, separator_valid],
    ]);
    function lambda2(item, index) {
      let separators = null;
      let valid = integer_even_is(index);
      if (valid) {
        separators = [separator_valid];
      } else {
        let size = list_size(item);
        let eq2 = equal_2(size);
        if (eq2) {
          separators = [separator_invalid];
        } else {
          separators = separators_invalid_next();
        }
      }
      let joined = list_join_cycled(item, separators);
      log(app_code_lesson_identifiers_underscores.name, {
        joined,
      });
      return joined;
    }
    let mapped3 = list_map_index(list, lambda2);
    log(app_code_lesson_identifiers_underscores.name, {
      mapped3,
    });
    return mapped3;
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
