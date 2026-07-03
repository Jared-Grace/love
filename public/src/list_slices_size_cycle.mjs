import { list_cycler } from "../../../love/public/src/list_cycler.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_get_wrap_index } from "../../../love/public/src/list_get_wrap_index.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { list_slices_size_generic } from "../../../love/public/src/list_slices_size_generic.mjs";
export function list_slices_size_cycle(list, min, max) {
  let mapped = range_from(min, max);
  let i = 0;
  let count_get = function lambda() {
    i = list_get_wrap_index(mapped, i);
    let item = list_get(mapped, i);
    i++;
    return item;
  };
  let next = list_cycler(list2);
  let slices = list_slices_size_generic(count_get, min, max, list);
  return slices;
}
