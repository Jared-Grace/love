import { list_size_equal } from "./list_size_equal.mjs";
import { list_all } from "./list_all.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
export function lists_sizes_equal(lists) {
  let first = list_first(lists);
  let fs = list_size(first);
  function lambda(list) {
    let v = list_size_equal(list, fs);
    return v;
  }
  let e = list_all(lists, lambda);
  return e;
}
