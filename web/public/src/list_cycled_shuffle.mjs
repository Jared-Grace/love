import { equal } from "../../../love/public/src/equal.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_to_indices } from "../../../love/public/src/list_to_indices.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function list_cycled_shuffle(list, cycle_size) {
  let mods = range(cycle_size);
  let indices = list_to_indices(list);
  function lambda(m) {
    function lambda2(index) {
      let m2 = mod(index, cycle_size);
      let eq2 = equal(left, right);
    }
    let filtered = list_filter(indices, lambda2);
  }
  each(mods, lambda);
  let r = list_shuffle(list);
  return r;
}
