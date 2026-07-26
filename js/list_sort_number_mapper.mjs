import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function list_sort_number_mapper(list, lambda$item) {
  function lambda(a, b) {
    let va = lambda$item(a);
    let vb = lambda$item(b);
    if (less_than(va, vb)) {
      let r = -1;
      return r;
    }
    if (greater_than(va, vb)) {
      let r2 = 1;
      return r2;
    }
    let r3 = 0;
    return r3;
  }
  list.sort(lambda);
  return list;
}
