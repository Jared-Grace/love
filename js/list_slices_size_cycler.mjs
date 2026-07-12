import { list_slices_size_generic } from "./list_slices_size_generic.mjs";
import { list_cycler } from "./list_cycler.mjs";
export function list_slices_size_cycler(list, counts, min) {
  let count_get = list_cycler(counts);
  let slices = list_slices_size_generic(count_get, list, min);
  return slices;
}
