import { object_property_get } from "./object_property_get.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
export function reply_sequence(sequence) {
  let fn = function reply_sequence_matches(a) {
    let input = object_property_get(a, "input");
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
