import { equal } from "../../../love/public/src/equal.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_to_indices } from "../../../love/public/src/list_to_indices.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_shuffle_indices } from "../../../love/public/src/list_shuffle_indices.mjs";
export function list_shuffle_cycled(list, cycle_size) {
  let mods = range(cycle_size);
  let indices = list_to_indices(list);
  function lambda(m) {
    function lambda2(index) {
      let m2 = mod(index, cycle_size);
      let eq2 = equal(m2, m);
      return eq2;
    }
    let filtered = list_filter(indices, lambda2);
    list_shuffle_indices(list, filtered);
  }
  each(mods, lambda);
}
