import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { each_reverse } from "../../../love/public/src/each_reverse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_reverse_previous(list, lambda) {
  marker("1");
  function lambda2(item) {
    let fi = list_first_is(list, item);
    if (fi) {
      let previous = null;
    }
  }
  let v = each_reverse(list, lambda2);
  return v;
}
