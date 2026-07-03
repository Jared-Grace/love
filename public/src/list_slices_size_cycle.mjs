import { list_cycler } from "../../../love/public/src/list_cycler.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { list_slices_size_generic } from "../../../love/public/src/list_slices_size_generic.mjs";
export function list_slices_size_cycle(list, min, max) {
  let mapped = range_from(min, max);
  let count_get = list_cycler(mapped);
  let slices = list_slices_size_generic(count_get, min, list);
  return slices;
}
