import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
export function reply_sequence(sequence) {
  let fn = function reply_sequence_matches(input) {
    let matches = true;
    function lambda(sequence_item, index) {
      let input_item = list_get(input, index);
      if (sequence_item !== input_item) {
        matches = false;
      }
    }
    each_index(sequence, lambda);
    return matches;
  };
  return fn;
}
