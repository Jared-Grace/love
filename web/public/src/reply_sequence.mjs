import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
export function reply_sequence(items) {
  let v = function reply_sequence_matches(input) {
    function lambda(item, index) {
      let item2 = list_get(list2, index2);
    }
    each_index(list, lambda);
  };
  return v;
}
