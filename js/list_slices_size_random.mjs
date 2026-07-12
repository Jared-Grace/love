import { integer_random } from "./integer_random.mjs";
import { list_slices_size_generic } from "./list_slices_size_generic.mjs";
export function list_slices_size_random(list, min, max) {
  let count_get = function lambda() {
    let r = integer_random(min, max);
    return r;
  };
  let slices = list_slices_size_generic(count_get, list, min);
  return slices;
}
