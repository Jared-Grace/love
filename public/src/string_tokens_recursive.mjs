import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { text_slice } from "../../../love/public/src/text_slice.mjs";
export function string_tokens_recursive(
  input,
  dictionary,
  index_left,
  tokens_matches,
  current,
) {
  let index_last = text_size(input);
  if (index_left === index_last) {
    let copy = list_copy(current);
    list_add(tokens_matches, copy);
  }
  function lambda3(index_right) {
    let sliced = text_slice(input, index_left, index_right);
    let exists = object_property_exists(dictionary, sliced);
    if (exists) {
      let copy2 = list_copy(current);
      list_add(copy2, sliced);
      string_tokens_recursive(
        input,
        dictionary,
        index_right,
        tokens_matches,
        copy2,
      );
    }
  }
  each_range_from(index_left + 1, index_last, lambda3);
}
