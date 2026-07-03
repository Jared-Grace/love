import { list_cycled_shuffle } from "../../../love/public/src/list_cycled_shuffle.mjs";
import { list_slices_size_cycle } from "../../../love/public/src/list_slices_size_cycle.mjs";
export function list_slices_size_cycles_shuffled(mapped, min, max) {
  let choices_count = max - min + 1;
  let list = list_slices_size_cycle(mapped, min, max);
  list_cycled_shuffle(choices_count, list);
  return list;
}
