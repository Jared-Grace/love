import { list_cycled_shuffle } from "../../../love/public/src/list_cycled_shuffle.mjs";
import { list_slices_size_cycle } from "../../../love/public/src/list_slices_size_cycle.mjs";
export function list_slices_size_cycles_shuffled(mapped, max, min) {
  let choices_count = max - min + 1;
  let list2 = list_slices_size_cycle(mapped, min, max);
  list_cycled_shuffle(list2, choices_count);
  return list2;
}
