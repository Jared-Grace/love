import { equal } from "./equal.mjs";
import { mod } from "./mod.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_to_indices } from "./list_to_indices.mjs";
import { each } from "./each.mjs";
import { range } from "./range.mjs";
import { list_shuffle_indices } from "./list_shuffle_indices.mjs";
export function list_shuffle_cycled(list, cycle_size) {
  let mods = range(cycle_size);
  let indices = list_to_indices(list);
  function lambda(m) {
    function lambda2(index) {
      let m2 = mod(index, cycle_size);
      let eq = equal(m2, m);
      return eq;
    }
    let filtered = list_filter(indices, lambda2);
    list_shuffle_indices(list, filtered);
  }
  each(mods, lambda);
}
