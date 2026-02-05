import { marker } from "../../../love/public/src/marker.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function each_previous_generic(
  index_valid_is,
  index_other_get,
  list,
  lambda$item$other,
) {
  function lambda_each_previous_generic(item, index) {
    let other = null;
    if (index_valid_is(index)) {
      let index2 = index_other_get(index);
      other = list_get(list, index2);
    }
    lambda$item$other(item, other);
  }
  let v = each_index(list, lambda_each_previous_generic);
  return v;
}
