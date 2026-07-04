import { list_slices_size_cycler } from "../../../love/public/src/list_slices_size_cycler.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
export function list_slices_size_cycle(list, min, max) {
  let mapped = range_from(min, max);
  let slices = list_slices_size_cycler(list, mapped, min);
  return slices;
}
