import { each } from "../../../love/public/src/each.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
export function list_remove_at_multiple_reverse(m) {
  let c = list_copy_reverse(m);
  function lambda2(index) {
    list_remove_at(params, index);
  }
  each(c, lambda2);
}
