import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
export function reply_sequence(sequence) {
  let fn = function reply_sequence_matches(a) {
    let tokens = object_property_get(a, "tokens");
    let matches = true;
    function lambda(sequence_item, index) {
      let token = list_get(tokens, index);
      if (sequence_item !== token) {
        matches = false;
        log({
          sequence_item,
          token,
        });
      }
    }
    each_index(sequence, lambda);
    return matches;
  };
  return fn;
}
