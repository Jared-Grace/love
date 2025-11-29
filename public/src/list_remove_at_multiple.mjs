import { each } from "../../../love/public/src/each.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
export function list_remove_at_multiple(list, removals) {
  function lambda2(index) {
    list_remove_at(list, index);
  }
  each(removals, lambda2);
}
