import { list_slice_from } from "../../../love/public/src/list_slice_from.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
export function list_first_last_slice(list_rg, list) {
  let v = list_first_last(list_rg);
  let function_copy_replace_first = list_first(v);
  let last = list_last(v);
  let sliced = list_slice_from(list, function_copy_replace_first, last);
  let v2 = {
    sliced,
    function_copy_replace_first,
    last,
  };
  return v2;
}
