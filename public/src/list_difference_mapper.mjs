import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_difference_mapper(list, list_other, mapper) {
  let list_other_mapped = list_map(list_other, mapper);
  function lambda2(la) {
    function lambda(l) {
      let l_mapped = mapper(l);
      let a = list_includes(list_other_mapped, l_mapped);
      if (not(a)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let difference = list_adder(lambda2);
  return difference;
  function lambda3(item) {}
}
