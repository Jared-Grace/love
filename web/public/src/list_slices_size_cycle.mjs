import { mod } from "../../../love/public/src/mod.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { list_slices_size_generic } from "../../../love/public/src/list_slices_size_generic.mjs";
export function list_slices_size_cycle(list, min, max) {
  let mapped = range_from(min, max);
  let size = list_size(list2);
  let i = 0;
  let count_get = function lambda() {
    i++;
    i = mod(i);
  };
  let slices = list_slices_size_generic(count_get, min, max, list);
  return slices;
}
