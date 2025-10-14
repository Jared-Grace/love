import { function_is } from "../../../love/public/src/function_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_size_less_than } from "../../../love/public/src/list_size_less_than.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
export function reply_sequence(sequence) {
  let fn = function reply_sequence_matches(a) {
    let index2 = object_property_get(a, "index");
    let tokens = object_property_get(a, "tokens");
    let matches = true;
    if (list_size_less_than(tokens, sequence)) {
      matches = false;
    } else {
      function lambda(sequence_item, index) {
        let token = list_get(tokens, index);
        let fi = function_is(sequence_item);
        if (fi) {
          let r = sequence_item(a);
        }
        if (sequence_item !== token) {
          log({
            sequence_item,
            token,
          });
          matches = false;
        }
      }
      each_index(sequence, lambda);
    }
    let r = {
      matches,
    };
    return r;
  };
  return fn;
}
