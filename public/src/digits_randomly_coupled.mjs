import { list_adder_each } from "../../../love/public/src/list_adder_each.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { boolean_random_3 } from "../../../love/public/src/boolean_random_3.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
export function digits_randomly_coupled() {
  let ds = digits();
  let chunks = list_chunk(ds, 2);
  function lambda(la, c) {
    let rb2 = boolean_random_3();
    if (rb2) {
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
