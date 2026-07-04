import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_slices_size_cycler } from "../../../love/public/src/list_slices_size_cycler.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { list_shuffle_cycled_range } from "../../../love/public/src/list_shuffle_cycled_range.mjs";
import { invoke_map } from "../../../love/public/src/invoke_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_join_cycled_invoker } from "../../../love/public/src/list_join_cycled_invoker.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { digits_randomly_coupled } from "../../../love/public/src/digits_randomly_coupled.mjs";
import { boolean_random_3 } from "../../../love/public/src/boolean_random_3.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { list_between_space } from "../../../love/public/src/list_between_space.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { app_code_lesson_symbols_identifiers_valid } from "../../../love/public/src/app_code_lesson_symbols_identifiers_valid.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { integer_even_is } from "../../../love/public/src/integer_even_is.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { word_plural } from "../../../love/public/src/word_plural.mjs";
import { html_cycle_code } from "../../../love/public/src/html_cycle_code.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { list_to_text_and_list } from "../../../love/public/src/list_to_text_and_list.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
export function app_code_lesson_identifiers_symbol_first() {
  function above(root) {
    let c2 = app_code_container_light_blue(root);
    const identifier_symbols_types = ["letter", "underscore", "dollar sign"];
    let identifier_symbols_types_plural = list_map(
      identifier_symbols_types,
      word_plural,
    );
    const identifiers_valid_anywhere = list_to_text_and_list(
      identifier_symbols_types_plural,
    );
    html_div_text(
      c2,
      "Remember, identifiers can have different kinds of symbols including " +
        identifiers_valid_anywhere,
    );
    let ds = digits();
    let combined = list_between_space(ds);
    let div = html_div(c2);
    let parts = list_concat_single(
      "Identifiers can also have " + word_plural("digit") + ": ",
      combined,
    );
    html_cycle_code(div, parts);
    let c = app_code_container_light_blue(root);
    html_div_text_multiple(c, [
      "However identifiers cannot have a digit as their first symbol (Identifiers cannot begin with a digit)",
      "After the first symbol an identifier can always be a digit",
      "And " +
        identifiers_valid_anywhere +
        " may be used anywhere in an identifier, even as the first symbol",
    ]);
  }
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    const min = 1;
    const max = 3;
    let counts = range_from(min, max);
    function lambda(la) {}
    let list3 = list_adder(lambda);
    let list2 = list_slices_size_cycler(mapped, counts, min);
    list_shuffle_cycled_range(list2, min, max);
    let list = list2;
    let next_get_list = list_iterator_refillable(digits_randomly_coupled, noop);
    let next_get = invoke_map(next_get_list, list_join_empty);
    function lambda2(batch_item, batch_item_index) {
      let joined = list_join_cycled_invoker(batch_item, next_get);
      let right = next_get();
      joined = text_combine(joined, right);
      let rb = boolean_random_3();
      let prefix = null;
      let valid = integer_even_is(batch_item_index);
      if (valid) {
        const valid_prefixes = ["$", "_"];
        prefix = list_random_item(valid_prefixes);
        if (rb) {
          let right3 = list_random_item(valid_prefixes);
          prefix = text_combine(prefix, right3);
        }
      } else {
        prefix = next_get();
      }
      joined = text_combine(prefix, joined);
      return joined;
    }
    let mapped3 = list_map_index(list, lambda2);
    log(app_code_lesson_identifiers_symbol_first.name, {
      mapped3,
    });
    return mapped3;
  }
  let name = list_join_empty(["Identifiers (first symbol)"]);
  let id = list_join_empty(["identifiers_symbol_first"]);
  let r = app_code_lesson_symbols_identifiers_valid(
    name,
    id,
    above,
    noop,
    batch_get,
  );
  return r;
}
