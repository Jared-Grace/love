import { list_slices_size_generic } from "../../../love/public/src/list_slices_size_generic.mjs";
import { list_cycler } from "../../../love/public/src/list_cycler.mjs";
export function list_slices_size_cycler(counts, min, list) {
  let count_get = list_cycler(counts);
  let slices = list_slices_size_generic(count_get, list, min);
  return slices;
}
