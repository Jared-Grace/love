import { each_index_reverse } from "../../../love/public/src/each_index_reverse.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function each_reverse_previous_generic(
  index_valid_is,
  index_other_get,
  list,
  lambda$item$previous,
) {
  function lambda2(item, index) {
    let other = null;
    if (index_valid_is(index)) {
      let index2 = index_other_get(index);
      other = list_get(list, index2);
    }
    lambda$item$previous(item, other);
  }
  let v = each_index_reverse(list, lambda2);
  return v;
}
