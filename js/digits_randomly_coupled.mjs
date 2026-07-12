import { list_adder_each } from "./list_adder_each.mjs";
import { digits } from "./digits.mjs";
import { each } from "./each.mjs";
import { boolean_random_3 } from "./boolean_random_3.mjs";
import { list_chunk } from "./list_chunk.mjs";
export function digits_randomly_coupled() {
  let ds = digits();
  let chunks = list_chunk(ds, 2);
  function lambda(la, c) {
    let rb = boolean_random_3();
    if (rb) {
      la(c);
    } else {
      function lambda4(d) {
        la([d]);
      }
      each(c, lambda4);
    }
  }
  let list = list_adder_each(chunks, lambda);
  return list;
}
