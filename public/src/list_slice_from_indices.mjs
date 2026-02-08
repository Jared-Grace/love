import { function_copy_replace_first } from "../../../love/public/src/function_copy_replace_first.mjs";
import { list_slice_include } from "../../../love/public/src/list_slice_include.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
export function list_slice_from_indices(list, indices) {
  list_sort_number(indices);
  let v = list_first_last(indices);
  let function_copy_replace_first = list_first(v);
  let last = list_last(v);
  let sliced = list_slice_include(list, function_copy_replace_first, last);
  return sliced;
}
