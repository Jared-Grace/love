import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { app_code_lesson_symbols_identifiers_valid } from "../../../love/public/src/app_code_lesson_symbols_identifiers_valid.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { equal_0 } from "../../../love/public/src/equal_0.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { integer_even_is } from "../../../love/public/src/integer_even_is.mjs";
import { boolean_random_3 } from "../../../love/public/src/boolean_random_3.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { list_join_cycled_invoker } from "../../../love/public/src/list_join_cycled_invoker.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { invoke_map } from "../../../love/public/src/invoke_map.mjs";
import { digits_randomly_coupled } from "../../../love/public/src/digits_randomly_coupled.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_slices_size_cycler } from "../../../love/public/src/list_slices_size_cycler.mjs";
import { list_items_double } from "../../../love/public/src/list_items_double.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { app_code_verse_words } from "../../../love/public/src/app_code_verse_words.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function app_code_lesson_identifiers_symbol_first_generic(
  name,
  id,
  above,
  on_question,
) {
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    const min = 1;
    const max = 2;
    let counts = range_from(min, max);
    let doubled = list_items_double(counts);
    let list2 = list_slices_size_cycler(mapped, doubled, min);
    let size = list_size(doubled);
    list_shuffle_cycled(list2, size);
    let list = list2;
    let refill_get = digits_randomly_coupled;
    let next_get_list = list_iterator_refillable(refill_get);
    let next_get = invoke_map(next_get_list, list_join_empty);
    function lambda2(batch_item, batch_item_index) {
      let joined = list_join_cycled_invoker(batch_item, next_get);
      let right = next_get();
      joined = text_combine(joined, right);
      let rb = boolean_random_3();
      let prefix = null;
      let valid = integer_even_is(batch_item_index);
      if (valid) {
        let m = mod(batch_item_index, 4);
        let eq = equal_0(m);
        if (eq) {
          const valid_prefixes = ["$", "_"];
          prefix = list_random_item(valid_prefixes);
          if (rb) {
            let right3 = list_random_item(valid_prefixes);
            prefix = text_combine(prefix, right3);
          }
        } else {
          prefix = "";
        }
      } else {
        prefix = next_get();
      }
      joined = text_combine(prefix, joined);
      return joined;
    }
    let mapped3 = list_map_index(list, lambda2);
    return mapped3;
  }
  let r = app_code_lesson_symbols_identifiers_valid(
    name,
    id,
    above,
    batch_get,
    on_question,
  );
  return r;
}
