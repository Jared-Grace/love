import { list_slices_size_generic } from "../../../love/public/src/list_slices_size_generic.mjs";
export function list_slices_size_random(list, min, max) {
  let count_get = function lambda() {};
  let slices = list_slices_size_generic(count_get, list, min);
  return slices;
}
