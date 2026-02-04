import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_index_reverse } from "../../../love/public/src/each_index_reverse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_reverse_previous(list, lambda$item$previous) {
  marker("1");
  function lambda2(item, index) {
    let other = null;
    if (index_valid(index)) {
      let index2 = index_mutate(index);
      other = list_get(list, index2);
    }
    lambda$item$previous(item, other);
  }
  let v = each_index_reverse(list, lambda2);
  return v;
  function index_valid(index) {
    let v2 = index >= 1;
    return v2;
  }
  function index_mutate(index) {
    let v3 = index - 1;
    return v3;
  }
}
