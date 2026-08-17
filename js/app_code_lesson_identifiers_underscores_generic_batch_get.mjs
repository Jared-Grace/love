import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_verse_words_letters_only } from "./app_code_verse_words_letters_only.mjs";
import { list_slices_size_cycles_shuffled } from "./list_slices_size_cycles_shuffled.mjs";
import { list_cycler } from "./list_cycler.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { list_size } from "./list_size.mjs";
import { equal_2 } from "./equal_2.mjs";
import { list_multiply_3_random_doubled } from "./list_multiply_3_random_doubled.mjs";
import { list_join_cycled } from "./list_join_cycled.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_code_lesson_identifiers_underscores_generic_batch_get(
  separator_invalid,
  separator_valid,
) {
  arguments_assert(arguments, 2);
  let mapped = app_code_verse_words_letters_only();
  let list = list_slices_size_cycles_shuffled(mapped, 2, 4);
  let separators_invalid_next = list_cycler([
    [separator_invalid],
    [separator_valid, separator_invalid],
    [separator_invalid, separator_valid],
  ]);
  function lambda(batch_item, batch_item_index) {
    let separators = null;
    let valid = integer_even_is(batch_item_index);
    if (valid) {
      separators = [separator_valid];
    } else {
      let size = list_size(batch_item);
      let eq = equal_2(size);
      if (eq) {
        separators = [separator_invalid];
      } else {
        separators = separators_invalid_next();
      }
    }
    let multiplied = list_multiply_3_random_doubled(separators);
    let joined = list_join_cycled(batch_item, multiplied);
    let r = boolean_random();
    if (r) {
      let right = list_random_item(multiplied);
      joined = text_combine(joined, right);
    }
    return joined;
  }
  let mapped3 = list_map_index(list, lambda);
  return mapped3;
}
