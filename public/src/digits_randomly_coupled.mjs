import { digits } from "../../../love/public/src/digits.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { boolean_random_3 } from "../../../love/public/src/boolean_random_3.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
export function digits_randomly_coupled() {
  let ds = digits();
  function lambda(la) {
    let chunks = list_chunk(ds, 2);
    function lambda3(c) {
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
    each(chunks, lambda3);
  }
  let list2 = list_adder(lambda);
  return list2;
}
