import { list_get_wrap } from "../../../love/public/src/list_get_wrap.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { list_slices_size_generic } from "../../../love/public/src/list_slices_size_generic.mjs";
export function list_slices_size_cycle(list, min, max) {
  let mapped = range_from(min, max);
  let i = 0;
  let count_get = function lambda() {
    let item = list_get_wrap(mapped, i);
    i++;
    return item;
  };
  let slices = list_slices_size_generic(count_get, min, max, list);
  return slices;
}
