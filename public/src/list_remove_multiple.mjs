import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function list_remove_multiple(list, removals) {
  function lambda(r) {
    list_remove(list, r);
  }
  each(removals, lambda);
}
