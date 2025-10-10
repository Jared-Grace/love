import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
export function reply_sequence(sequence) {
  let fn = function reply_sequence_matches(a) {
    let tokens = object_property_get(a, "tokens");
    let matches = true;
    function lambda(sequence_item, index) {
      let token = list_get(tokens, index);
      if (sequence_item !== token) {
        matches = false;
      }
    }
    each_index(sequence, lambda);
    return matches;
  };
  return fn;
}
