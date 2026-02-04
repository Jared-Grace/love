import { each_index_reverse } from "../../../love/public/src/each_index_reverse.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_reverse_previous(list, lambda) {
  marker("1");
  function lambda2(item) {
    let fi = list_first_is(list, item);
    let previous = null;
    if (not(fi)) {
      let index = list_index_of(list, item);
    }
  }
  let v = each_index_reverse(list, lambda2);
  return v;
}
