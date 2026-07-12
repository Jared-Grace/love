import { list_remove_first } from "./list_remove_first.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function list_iterator_refillable_on(refill_get, on_refill) {
  let remaining = [];
  let next_get = function lambda() {
    let e = list_empty_is(remaining);
    if (e) {
      let items = refill_get();
      list_add_multiple(remaining, items);
      on_refill(remaining);
    }
    let b = list_remove_first(remaining);
    return b;
  };
  return next_get;
}
