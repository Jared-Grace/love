import { each_reverse_previous_generic } from "../../../love/public/src/each_reverse_previous_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_reverse_next(list, lambda$item$previous) {
  marker("1");
  let v4 = each_reverse_previous_generic(
    index_valid_is,
    index_other_get,
    list,
    lambda$item$previous,
  );
  return v4;
  function index_valid_is(index) {
    let v2 = index >= 1;
    return v2;
  }
  function index_other_get(index) {
    let v3 = index - 1;
    return v3;
  }
}
