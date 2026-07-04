import { list_shuffle_cycled_range } from "../../../love/public/src/list_shuffle_cycled_range.mjs";
import { list_slices_size_cycle } from "../../../love/public/src/list_slices_size_cycle.mjs";
export function list_slices_size_cycles_shuffled(mapped, min, max) {
  let list = list_slices_size_cycle(mapped, min, max);
  list_shuffle_cycled_range(list, min, max);
  return list;
}
