import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_identifiers_valid } from "./app_code_lesson_identifiers_valid.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { equal_0 } from "./equal_0.mjs";
import { mod } from "./mod.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { boolean_random_3 } from "./boolean_random_3.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_join_cycled_invoker } from "./list_join_cycled_invoker.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { invoke_map } from "./invoke_map.mjs";
import { digits_randomly_coupled } from "./digits_randomly_coupled.mjs";
import { list_shuffle_cycled } from "./list_shuffle_cycled.mjs";
import { list_size } from "./list_size.mjs";
import { list_slices_size_cycler } from "./list_slices_size_cycler.mjs";
import { list_items_double } from "./list_items_double.mjs";
import { range_from } from "./range_from.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { app_code_verse_words } from "./app_code_verse_words.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_identifiers_symbol_first_generic(
  name_id,
  above,
  on_question,
) {
  function batch_get() {
    let words = app_code_verse_words();
    let mapped = list_map(words, text_letters_only);
    let min = 1;
    let max = 2;
    let counts = range_from(min, max);
    let doubled = list_items_double(counts);
    let list2 = list_slices_size_cycler(mapped, doubled, min);
    let size = list_size(doubled);
    list_shuffle_cycled(list2, size);
    let list = list2;
    let refill_get = digits_randomly_coupled;
    let next_get_list = list_iterator_refillable(refill_get);
    let next_get = invoke_map(next_get_list, list_join_empty);
    function lambda(batch_item, batch_item_index) {
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
          let valid_prefixes = ["$", "_"];
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
    let mapped3 = list_map_index(list, lambda);
    return mapped3;
  }
  let r = app_code_lesson_identifiers_valid(
    name_id,
    above,
    batch_get,
    on_question,
  );
  return r;
}
