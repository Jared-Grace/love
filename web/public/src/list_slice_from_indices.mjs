import { log } from "../../../love/public/src/log.mjs";
import { list_slice_include } from "../../../love/public/src/list_slice_include.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
export function list_slice_from_indices(mapped, list) {
  list_sort_number(mapped);
  let v = list_first_last(mapped);
  let first = list_first(v);
  let last = list_last(v);
  let sliced = list_slice_include(list, first, last);
  log({
    sliced,
    first,
    last,
  });
  return sliced;
}
