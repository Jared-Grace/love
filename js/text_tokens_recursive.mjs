import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_add } from "./list_add.mjs";
import { text_size } from "./text_size.mjs";
import { each_range_from } from "./each_range_from.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_slice } from "./text_slice.mjs";
export function text_tokens_recursive(
  input,
  dictionary,
  index_left,
  tokens_matches,
  current,
) {
  let index_last = text_size(input);
  if (equal(index_left, index_last)) {
    let copy = list_copy(current);
    list_add(tokens_matches, copy);
  }
  function lambda(index_right) {
    let sliced = text_slice(input, index_left, index_right);
    let exists = property_exists(dictionary, sliced);
    if (exists) {
      let copy2 = list_copy(current);
      list_add(copy2, sliced);
      text_tokens_recursive(
        input,
        dictionary,
        index_right,
        tokens_matches,
        copy2,
      );
    }
  }
  let from2 = add(index_left, 1);
  each_range_from(from2, index_last, lambda);
}
