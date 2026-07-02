import { list_slices_size_generic } from "../../../love/public/src/list_slices_size_generic.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
export function list_slices_size_cycle(list, min, max) {
  let count_get = integer_random;
  let slices = list_slices_size_generic(count_get, min, max, list);
  return slices;
}
