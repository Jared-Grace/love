import { list_to_indices } from "../../../love/public/src/list_to_indices.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function list_cycled_shuffle(list, cycle_size) {
  let mods = range(cycle_size);
  let indices = list_to_indices(list);
  function lambda(m) {}
  each(mods, lambda);
  let r = list_shuffle(list);
  return r;
}
