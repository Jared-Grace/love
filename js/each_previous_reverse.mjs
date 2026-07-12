import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { each_previous_generic } from "./each_previous_generic.mjs";
import { subtract } from "./subtract.mjs";
export function each_previous_reverse(list, lambda$item$previous) {
  let reversed = list_copy_reverse(list);
  let v4 = each_previous_generic(
    index_valid_is,
    index_other_get,
    reversed,
    lambda$item$previous,
  );
  return v4;
  function index_valid_is(index) {
    let v2 = index >= 1;
    return v2;
  }
  function index_other_get(index) {
    let v3 = subtract(index, 1);
    return v3;
  }
}
