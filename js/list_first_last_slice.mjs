import { list_slice_from } from "./list_slice_from.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_first_last } from "./list_first_last.mjs";
export function list_first_last_slice(list_rg, list) {
  let v = list_first_last(list_rg);
  let first = list_first(v);
  let last = list_last(v);
  let sliced = list_slice_from(list, first, last);
  let r = {
    sliced,
    first,
    last,
  };
  return r;
}
