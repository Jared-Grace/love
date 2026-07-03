import { list_remove_first } from "../../../love/public/src/list_remove_first.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
export function list_iterator_refillable(on_batch_item, on_batch) {
  let remaining = [];
  let refresh = function lambda() {
    let e = list_empty_is(remaining);
    if (e) {
      let items = batch();
      list_add_multiple(remaining, items);
      on_batch(remaining);
    }
    let b = list_remove_first(remaining);
    return b;
  };
  refresh();
  return refresh;
}
