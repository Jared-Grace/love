import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { list_slices_size_cycle } from "../../../love/public/src/list_slices_size_cycle.mjs";
export function list_slices_size_cycles_shuffled(mapped, min, max) {
  let list = list_slices_size_cycle(mapped, min, max);
  let choices_count = max - min + 1;
  list_shuffle_cycled(list, choices_count);
  return list;
}
