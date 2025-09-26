import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
export function reply_sequence(sequence) {
  let v = function reply_sequence_matches(input) {
    function lambda(sequence_item, index) {
      let input_tem = list_get(input, index);
      if (false) {
      }
    }
    each_index(sequence, lambda);
  };
  return v;
}
