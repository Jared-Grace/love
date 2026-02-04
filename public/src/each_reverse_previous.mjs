import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_index_reverse } from "../../../love/public/src/each_index_reverse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_reverse_previous(list, lambda$item$index) {
  marker("1");
  function lambda2(item, index) {
    let previous = null;
    if (index >= 1) {
      previous = list_get(list, index - 1);
    }
    lambda$item$index(item, previous);
  }
  let v = each_index_reverse(list, lambda2);
  return v;
}
