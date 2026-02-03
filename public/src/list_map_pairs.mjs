import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function list_map_pairs(verse_numbers, filtered, mapper) {
  function lambda2(la) {
    function lambda(nn, text) {
      const v = mapper(nn, text);
      la(v);
    }
    each_pair(verse_numbers, filtered, lambda);
  }
  let list2 = list_adder(lambda2);
  return list2;
}
