import { list_remove_all } from "../../../love/public/src/list_remove_all.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function list_remove_all_multiple(removals, list) {
  function lambda(r) {
    list_remove_all(list, r);
  }
  each(removals, lambda);
}
